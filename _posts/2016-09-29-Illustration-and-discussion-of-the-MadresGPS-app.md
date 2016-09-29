---
layout: post
title: "Illustration and Discussion of the MadresGPS App"
date: 2015-07-23
---

The MadresGPS is a location tracking app tailored to the need of scientific research. It is currently being used by the USC [MADRES study](http://madrescenter.blogspot.com/). Details about its characters and specifics can be found [here](https://github.com/wangjingke/madresGpsClient). This post will focus on how to use the app and some caveats about the usage of the app, and the analysis of the data.

### Installment
The app can be found and installed from the Google Play Store under the name "madresGPS", or through this [link](https://play.google.com/store/apps/details?id=com.wangjingke.madresgps). The latest version should be 1.7.3

### Initial setup
The location accuracy of the phone needs to be set as high, and the WiFi should be turned on.

<div align="center" style="display: inline-block">
    <div style="max-width: 250px; height: auto; display: inline-block">
    <img src="{{site.url}}/assets/images/madresGPS/location.png" style="width: 100%; height: 100%" />​
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <div style="max-width: 250px; height: auto; display: inline-block">
    <img src="{{site.url}}/assets/images/madresGPS/accuracy.png" style="width: 100%; height: 100%" />​
    </div>
</div>

For phones with system before android 6.0, the app will ask for permissions at the beginning of the installment. For phones with android 6.0 and above, the app will prompt and ask for permissions at the first time the app launches. You can make sure the app has all the permissions it needs by going to the system settings and check the app permissions.

If you have android 6.0 and above, you may want to add the app to the whitelist by selecting not optimized for battery under the battery option in system settings so that the tracking will continue to work after the phone enters the doze mode. Otherwise, the app will only record a few times every hour depending on the doze stage of the phone.

<div align="center" style="display: inline-block">
    <div style="max-width: 250px; height: auto; display: inline-block">
    <img src="{{site.url}}/assets/images/madresGPS/battery.png" style="width: 100%; height: 100%" />​
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <div style="max-width: 250px; height: auto; display: inline-block">
    <img src="{{site.url}}/assets/images/madresGPS/whitelist.png" style="width: 100%; height: 100%" />​
    </div>
</div>

### Interface
The interface of the app is deliberately kept simple so that the participants have less interests to play with the app, and although unlikely, accidentally change the settings or terminate the tracking prematurely.

<div align="center">
<img src="{{site.url}}/assets/images/madresGPS/interface.png" style="width: 25%; height: 25%" />
</div>

### Start tracking
To start location tracking, input "startmadres mad####" on the command line. The #### is the participant ID we use in the MADRES study. The app will recognize the "startmadres mad" prefix, and only start tracking if the input fits this pattern, making it harder for participants to play with the app.

#### mode selection
There are two mode for location tracking: "wake timer" and "wake lock". The wake timer utilizes the `AlarmManager` in android to schedule repeated tasks and wake up the phone regularly, while the wake lock uses `WakeLock` to keep the phone awake all the time to achieve more accurate and constant recording intervals, but it also consumes more battery than the wake timer.

The wake timer is recommended since it is accurate enough to generate consistent pacing among records with minor variations. Wake lock is not necessary unless the app behaves weirdly.

Details about the realization of the two modes can be found in this [post](http://wangjingke.com/2016/09/23/Multiple-ways-to-schedule-repeated-tasks-in-android).

#### interval selection
The recording interval is preset to once every ten seconds, but it can be changed on the interface. Changing the interval will most affect the size of the data over time, but it has little impact on the battery consumption. I will discuss the exact reason in the caveats.

#### confirm and start tracking
After type in the command, choose the mode and interval, press "Confirm" to start the tracking. There will be texts showing on the screen stating the participant ID and the study has started. A notification will also show up in the phone indicating the ID and interval.

<div align="center" >
    <div style="max-width: 250px; height: auto; display: inline-block">
    <img src="{{site.url}}/assets/images/madresGPS/startmadres.png" style="width: 100%; height: 100%" />​
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <div style="max-width: 250px; height: auto; display: inline-block">
    <img src="{{site.url}}/assets/images/madresGPS/start.png" style="width: 100%; height: 100%" />​
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <div style="max-width: 250px; height: auto; display: inline-block">
    <img src="{{site.url}}/assets/images/madresGPS/notification1.png" style="width: 100%; height: 100%" />​
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <div style="max-width: 250px; height: auto; display: inline-block">
    <img src="{{site.url}}/assets/images/madresGPS/notification2.png" style="width: 100%; height: 100%" />​
    </div>
</div>

### Stop tracking
Type in "stopmadres" on the command line and press "Confirm" to stop the tracking, wait for a few seconds before turn off the app or anything else to give the app sometime to rename the files and shut down the services.

<div align="center">
<img src="{{site.url}}/assets/images/madresGPS/stopmadres.png" style="width: 30%; height: 30%" />
</div>

### Clean data
You can also type in "cleanmadres" on the command line and confirm to delete all the files stored on the phone, but this is not recommended because you may accidentally delete data before downloading them. It is better to connect the phone to a computer and perform all the file management, like download and delete.

### Download data
Connect the phone to a computer through USB as MTP, the data are stored under the "MadresGPS" folder.













