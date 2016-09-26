---
layout: post
title: "Multiple ways to schedule repeated tasks in android"
date: 2016-09-23
---

In the past a couple weeks, I have been developing a location tracking app for the USC MADRES study. We need a customized app for our study because first, the location data from participants are considered sensible information by the IRB, and have to be encrypted; second, we want to separate signals from the GPS and from the network for good research reasons. Details about the app can be found [here]().

It turns out that the key to the app is to find a way to perform a task (such as recording the location) on the phone periodically and consistently. Here I want to summarize all sorts of the methods I tried in order to achieve this goal, and my tears and joys during the process.

The simplest solution is a *Timer*, but a *Timer* has certain limitations as discussed in this [post](http://stackoverflow.com/a/18606091/5120702). There are other options like using the *ScheduledThreadPoolExecutor* or the *Handler*, with the later one being the most common choice. It is fairly easy to schedule a repeating task using *Handler* as you can just embed the next event within the previous one.

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

After adding a *startForeground* notification to the service to avoid being accidentally killed by android, everything should be working just fine, but here comes the problem of uneven paces/intervals among the repeated tasks all because of android not being a real time system.

When I schedule my repeated tasks using the *Handler* with a 10 second interval, the app works beautifully when the screen is on, but the interval changes randomly from 10 seconds to more than 1 minutes after the screen is turned off. This kind of delay in execution mainly come from two sources.

The first is so-called time drift. When the screen is on, and the phone is fully awake, the interval between two consecutive events will stay constant most of time, but it may jump by 1 second once a while. This is because the execution of the program takes time, and the time will be added to the delay set up in the *Handler*. For example, it takes 0.1 seconds for the phone to complete whatever you want it to do, and then it schedules the next event to be in 10 seconds later, the interval between the beginning of the current event and the next one is therefore 10.1 seconds instead of 10. These tiny differences add up to a full second and we will see a jump in the timestamp of intervals. In the previous example, the timestamp for the first event is at 0s, for the second is at 10.1s, the third at 20.2s, ... and the tenth at 101.0s.

A few tricks can be used to slow down the drift. The first is to put the *handler.postDelayed()* at the begging of *run()* statement so that regardless how long the actual program takes, the next event can be scheduled as soon as possible. This, however, does not cover the time it takes to initiate the instance, so the drift problem still exists; and the second trick is to introduce a dynamic interval, instead of a static one. Rather than using exact 10s, it can be `10*1000-SystemClock.elapsedRealtime()%1000` so that the next event is always scheduled to be at the beginning of the 10th second, assuming the initiation takes less than a second.

The next thing that causes delay is phone going to sleep mode. 
