---
layout: post
title: "Multiple ways to schedule repeated tasks in android"
date: 2016-09-23
---

In the past a couple weeks, I have been developing a location tracking app for the USC MADRES study. We need a customized app for our study because first, the location data from participants are considered sensible information by the IRB, and have to be encrypted; second, we want to separate signals from the GPS and from the network for good research reasons. Details about the app can be found [here]().

It turns out that the key to the app is to find a way to perform a task (such as recording the location) on the phone periodically and consistently. Here I want to summarize all sorts of the methods I tried in order to achieve this goal, and my tears and joys during the process.

The simplest solution is a `Timer`, but a `Timer` has certain limitations as discussed in this [post](http://stackoverflow.com/a/18606091/5120702). There are other options like using the `ScheduledThreadPoolExecutor` or the `Handler`, with the later one being the most common choice. It is fairly easy to schedule a repeating task using `Handler` as you can just embed the next event within the previous one.

```java
Handler handler = new Handler();
private Runnable periodicUpdate = new Runnable () {
    @override
    public void run() {
        // scheduled another events to be in 10 seconds later
        handler.postDelayed(periodicUpdate, 10*1000 //milliseconds);
        // below is whatever you want to do

    }
};
```

After adding a `startForeground` notification to the service to avoid being accidentally killed by android, everything should be working just fine, but here comes the problem of uneven paces/intervals among the repeated tasks, all because of android not being a real time system.

When I schedule my repeated tasks using the `Handler` with a 10 second interval, the app works beautifully when the screen is on, but the interval changes randomly from 10 seconds to a few minutes after the screen is turned off. This kind of delay in execution mainly come from two sources.

The first is so-called time drift. When the screen is on, and the phone is fully awake, the interval between two consecutive events will stay constant most of time, but it may jump by 1 second once a while. This is because the execution of the program takes time, and the time will be added to the delay set up in the `Handler`. For example, it takes 0.1 seconds for the phone to complete whatever you want it to do, and then it schedules the next event to be in 10 seconds later, the interval between the beginning of the current event and the next one is therefore 10.1 seconds instead of 10. These tiny differences add up to a full second and we will see a jump in the timestamp of intervals. In the previous example, the timestamp for the first event is at 0s, for the second is at 10.1s, the third at 20.2s, ... and the tenth at 101.0s.

A few tricks can be used to slow down the drift. The first is to put the `handler.postDelayed()` at the beginning of `run()` statement so that regardless how long the actual program takes, the next event can be scheduled as soon as possible. This, however, does not cover the time it takes to initiate the instance, so the drift problem still exists; and the second trick is to introduce a dynamic interval. Rather than using exact 10s, it can be `10*1000-SystemClock.elapsedRealtime()%1000` so that the next event is always scheduled to be at the beginning of the 10th second, assuming the initiation takes less than a second.

The next thing that causes delay is the phone going to sleep mode. An android phone allegedly (due to a lack of proper documentation) would quickly go to sleep after the screen is off and nothing occupies the CPU. The [official reference](https://developer.android.com/reference/android/os/Handler.html) mentions that the delay time is in `delayMillis`, which means the task
    > to be run after the specified amount of time elapses.
This misleading message may give people a false hope that the `delayMillis` corresponds to real time elapse in real world, but as explained [here](http://binarybuffer.com/2012/07/executing-scheduled-periodic-tasks-in-android) by its the source code, the `Handler.postDelayed()` method does not account for phone's deep sleep time, nor does the `Handler.postAtTime()` method since they both rely on the [`uptimeMillis`](https://developer.android.com/reference/android/os/SystemClock.html). Basically, the take home message for `Handler` is that it guarantees delay for at least the specified time period, but the exact time of delay depends on the phone's mood.

I have then tried a few ways to get constant intervals.

The first is `WakeLock`. A partial wake lock will keep the phone awake all the time, so the `delayMillis` reconciles with the time elapse in the real world. It is so easy to set up a wake lock, almost too attempting, to make me suspect that android want us to do it.

```java
public class GpsTrackerWakelock extends Service {
    PowerManager pm;
    PowerManager.WakeLock wl;

    Handler handler = new Handler();
    private Runnable periodicUpdate = new Runnable() {
        @Override
        public void run() {
            handler.postDelayed(periodicUpdate, 10*1000 - SystemClock.elapsedRealtime()%1000);
            // whatever you want to do below
        }
    };

    @Override
    public int onStartCommand(Intent intent, int flags, int startId)
    {
        handler.post(periodicUpdate);
        return START_STICKY;
    }

    @Override
    public void onCreate() {        
        pm = (PowerManager) getSystemService(Context.POWER_SERVICE);
        wl = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "GpsTrackerWakelock");
        wl.acquire();
    }

    @Override
    public void onDestroy()
    {
        super.onDestroy();
        wl.release();

    }
}
```

The wake lock works like a charm with only one issue, poor battery life. Without doing anything else but running my app, the phone usually manages to survive for around 30 hrs, which is acceptable for our study purpose since our participants carry dedicated study phones and they are able to charge the phone at night. It becomes a problem when the participants have to carry the phone for more than two continuous days without a charge, or use the app on their own phones.

So the next solution is `AlarmManager`. `AlarmManager` is in general used to schedule events that have relatively long intervals like once every half hour or several hours. `AlarmManager` has methods `setRepeating()` for scheduling repeating tasks, but the exact interval is 'inexact' as stated in the [official reference](https://developer.android.com/reference/android/app/AlarmManager.html). To get an alarm at the exact time point, the `setExact()` method is needed.

I have tried a couple ways of using `AlarmManager`, not all of them are ideal, but I will still list them here for future references.

First I want to keep things simple by using `AlarmManager` to send a blank intent to wake up the phone every second, and performing the task every 10 seconds.

```java
public class GpsTracker extends Service {
    Handler handler = new Handler();
    private Runnable periodicUpdate = new Runnable() {
        @Override
        public void run() {
            handler.postDelayed(periodicUpdate, 1000); // schedule next wake up every second
            Intent notificationIntent = new Intent(GpsTracker.this, GpsTracker.class);
            PendingIntent pendingIntent = PendingIntent.getActivity(GpsTracker.this, 0, notificationIntent, 0);
            AlarmManager keepAwake = (AlarmManager) getSystemService(ALARM_SERVICE);
            keepAwake.setExact(AlarmManager.ELAPSED_REALTIME_WAKEUP, SystemClock.elapsedRealtime+1000, pendingIntent);

            long current = System.currentTimeMillis();
            if ((current-current%1000)%(1000*10)  == 0) { // record on every tenth seconds (0s, 10s, 20s, 30s...)
                // whatever you want to do
            }
        }
    };

    @Override
    public int onStartCommand(Intent intent, int flags, int startId)
    {
        handler.post(periodicUpdate);
        return START_STICKY;
    }

}
```

The idea is to have the phone wake up regularly to reduce the deep sleep time while the `Handler` keep its own pace of repeating. The battery consumption is noticeably better compared to the wake lock even when the phone is waken up at such a high frequency, but the interval between two events varies randomly from 10s to 20s, so the problem of delayed execution is still there, only not so terrible as before. I have tested a few fixes to adjust for the delay, such as a counter or timer, but none of them yield satisfactory results.

```java
// using a counter
public class GpsTracker extends Service {
    private int counter = 0;
    Handler handler = new Handler();
    private Runnable periodicUpdate = new Runnable() {
        @Override
        public void run() {
            counter++;
            if (counter>=10) { // record on every tenth seconds (0s, 10s, 20s, 30s...)
                counter = 0;
                // whatever you want to do
            }
        }
    };
}
// using a timer since sometimes the time elapse is larger than 10 seconds already before 10 repeated alarms
public class GpsTracker extends Service {
    private long previous = 0;
    Handler handler = new Handler();
    private Runnable periodicUpdate = new Runnable() {
        @Override
        public void run() {
            if (SystemClock.elapsedRealtime >= previous + 10*1000) { // record on every tenth seconds (0s, 10s, 20s, 30s...)
                previous = SystemClock.elapsedRealtime;
                // whatever you want to do
            }
        }
    };
}
```

After the simple approach proven futile, I have to go with the more complex solutions, such as `WakefulBroadcastReceiver`. I have borrowed some ideas from this [repository](https://github.com/commonsguy/cw-omnibus/blob/master/JobScheduler/PowerHungry/app/src/main/java/com/commonsware/android/job/PollReceiver.java), and set the service up.

```java
public class GpsTrackerAlarm extends Service {
    @Override
    public int onStartCommand(Intent intent, int flags, int startId)
    {
        super.onStartCommand(intent, flags, startId);
        return START_STICKY;
    }

    @Override
    public void onCreate() {
        GpsTrackerAlarmTrigger.scheduleExactAlarm(GpsTrackerAlarm.this, (AlarmManager) getSystemService(ALARM_SERVICE));
    }

    @Override
    public void onDestroy()
    {
        super.onDestroy();
        GpsTrackerAlarmTrigger.cancelAlarm(this, (AlarmManager)getSystemService(ALARM_SERVICE));

    }
}

public class GpsTrackerAlarmTrigger extends WakefulBroadcastReceiver {
    @Override
    public void onReceive (final Context context, Intent intent) {
        Log.i("trigger", "receiveAlarm @ "+SystemClock.elapsedRealtime());
        Intent service = new Intent(context, GpsTrackerAlarmRecorder.class);
        startWakefulService(context, service);
        scheduleExactAlarm(context, (AlarmManager)context.getSystemService(Context.ALARM_SERVICE));

    }
    public static void scheduleExactAlarm(Context context, AlarmManager alarms) {
        Log.i("trigger", "scheduleAlarm @ "+SystemClock.elapsedRealtime());
        alarms.setExact(AlarmManager.ELAPSED_REALTIME_WAKEUP, SystemClock.elapsedRealtime()+5*1000-SystemClock.elapsedRealtime()%1000, pi);
    }
    public static void cancelAlarm(Context context, AlarmManager alarms) {
        Intent i=new Intent(context, GpsTrackerAlarmTrigger.class);
        PendingIntent pi=PendingIntent.getBroadcast(context, 0, i, 0);
        alarms.cancel(pi);
    }
}

public class GpsTrackerAlarmRecorder extends IntentService {
    public GpsTrackerAlarmRecorder() {
        super("GpsTrackerAlarmRecorder");
    }
    @Override
    protected void onHandleIntent(Intent intent) {
        Handler handler = new Handler();
        Runnable periodicUpdate = new Runnable() {
            @Override
            public void run() {
                Log.i("recorder", "executeAlarm @ "+ SystemClock.elapsedRealtime());
            }
        };
        handler.post(periodicUpdate);
        GpsTrackerAlarmTrigger.completeWakefulIntent(intent);
    }
}

// register the service and broadcast receiver in the manifest file
<service android:name=".GpsTrackerAlarm"></service>
<service android:name=".GpsTrackerAlarmRecorder"></service>
<receiver android:name=".GpsTrackerAlarmTrigger"></receiver>
```

The idea is to initiate the first alarm in the service, and each alarm will schedule the next alarm when receiving the intent. An alarm will start a `startWakefulService()` that starts the `IntentService` and keep the phone awake until the `Handler` completes its job. Theoretically it should work, but here is what I get when the app is running on an emulator on Android studio.

>I/trigger: scheduleAlarm @ 358017 <br>
>I/trigger: receiveAlarm @ 368010 <br>
>I/trigger: scheduleAlarm @ 368066 <br>
>I/recorder: executeAlarm @ 368105 <br>
>I/trigger: receiveAlarm @ 378007 <br>
>I/trigger: scheduleAlarm @ 378020 <br>
>I/trigger: receiveAlarm @ 388003 <br>
>I/trigger: scheduleAlarm @ 388011 <br>
>I/trigger: receiveAlarm @ 398002 <br>
>I/trigger: scheduleAlarm @ 398003 <br>
>I/recorder: executeAlarm @ 398006 <br>
>I/trigger: receiveAlarm @ 408002 <br>
>I/trigger: scheduleAlarm @ 408003 <br>
>I/trigger: receiveAlarm @ 418001 <br>
>I/trigger: scheduleAlarm @ 418002 <br>
>I/trigger: receiveAlarm @ 428001 <br>
>I/trigger: scheduleAlarm @ 428004 <br>
>I/recorder: executeAlarm @ 428008 <br>


It seems that the embedded reschedule in the `WakefulBroadcastReceiver` is working, but it takes a while for the `IntentService` to receive the intent, sometimes never, so this approach turns out not working. The next and last thing I tried is to use a regular `BroadcastReceiver`, and have the task executed under `onReceive()` methods with a wake lock to make sure the phone does not go back to sleep until the task is completed.

```java
public class GpsTrackerAlarmTrigger extends BroadcastReceiver {
    @Override
    public void onReceive (final Context context, Intent intent) {
        scheduleExactAlarm(context, (AlarmManager)context.getSystemService(Context.ALARM_SERVICE));

        PowerManager pm = (PowerManager) context.getSystemService(Context.POWER_SERVICE);
        PowerManager.WakeLock wl = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "GpsTrackerWakelock");
        wl.acquire();

        Handler handler = new Handler();
        Runnable periodicUpdate = new Runnable() {
            @Override
            public void run() {
                // whatever you want to do
            }
        };

        handler.post(periodicUpdate);
        wl.release();
    }

    public static void scheduleExactAlarm(Context context, AlarmManager alarms, int interval) {
        int refresh_interval = interval;
        Intent i=new Intent(context, GpsTrackerAlarmTrigger.class);
        PendingIntent pi=PendingIntent.getBroadcast(context, 0, i, 0);
        alarms.setExact(AlarmManager.ELAPSED_REALTIME_WAKEUP, SystemClock.elapsedRealtime()+10*1000-SystemClock.elapsedRealtime()%1000, pi);
    }

    public static void cancelAlarm(Context context, AlarmManager alarms) {
        Intent i=new Intent(context, GpsTrackerAlarmTrigger.class);
        PendingIntent pi=PendingIntent.getBroadcast(context, 0, i, 0);
        alarms.cancel(pi);
    }
}
```

Overall, the results from this approach are kind of acceptable. There is still variation in the intervals, but it is usually within seconds; the battery consumption is reasonable and it can be further reduced with longer intervals. A couple things worth noting about this method. The `BroadcastReceiver` would have to be static if I want to include it in the `Service` as an inner class, but it would not be able to access variables created in the outer class, so it has to be separate from the `Service`. Then, I have to make a variable from the `Service` as static so that the `BroadcastReceiver` can access it, but this is a bad programming practice.
