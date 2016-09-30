---
layout: post
title: "Illustration and Discussion of the MadresGPS App"
date: 2016-09-29
---

The MadresGPS is a location tracking app tailored to the need of scientific research. It is currently being used by the USC [MADRES study](http://madrescenter.blogspot.com/). Details about its characters and specifics can be found [here](https://github.com/wangjingke/madresGpsClient). This post will focus on how to use the app and some caveats about the usage of the app, and the analysis of the data.

### Installment
The app can be found and installed from the Google Play Store under the name "madresGPS", or through this [link](https://play.google.com/store/apps/details?id=com.wangjingke.madresgps). The latest version should be 1.7.3

### Initial setup
The location accuracy of the phone needs to be set as high, and the WiFi should be turned on.

<div align="center">
    <div style="max-width: 250px; height: auto; display: inline-block">
    <img src="{{site.url}}/assets/images/madresGPS/location.png" style="width: 100%; height: 100%" />​
    </div>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <div style="max-width: 250px; height: auto; display: inline-block">
    <img src="{{site.url}}/assets/images/madresGPS/accuracy.png" style="width: 100%; height: 100%" />​
    </div>
</div>
<p></p>
For phones with system before android 6.0, the app will ask for permissions at the beginning of the installment. For phones with android 6.0 and above, the app will prompt and ask for permissions at the first time the app launches. You can make sure the app has all the permissions it needs by going to the system settings and check the app permissions.

If you have android 6.0 and above, you may want to add the app to the whitelist by selecting not optimized for battery under the battery option in system settings so that the tracking will continue to work after the phone enters the doze mode. Otherwise, the app will only record a few times every hour depending on the doze stage of the phone.
<p></p>
<div align="center">
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
<img src="{{site.url}}/assets/images/madresGPS/stopmadres.png" style="width: 25%; height: 25%" />
</div>

### Clean data
You can also type in "cleanmadres" on the command line and confirm to delete all the files stored on the phone, but this is not recommended because you may accidentally delete data before downloading them. It is better to connect the phone to a computer and perform all the file management, like download and delete.

### Download data
Connect the phone to a computer through USB as MTP, the data are stored under the "MadresGPS" folder.

### Decrypt data
The location data was encrypted with AES and then write to the file. The output from madresGPS can be decrypted with a password key in various ways, such as this [one](http://wangjingke.com/madresGpsDecryption/index.html) in javascript, and this [one](https://github.com/wangjingke/madresGpsProcess) in java.

Before decryption, the raw data looks like this,

<small>
>"2016-09-23 16:41:22","Tracking","EehaW5Lg7TcVZ5AWQWijUTFWkVjp+vkYjGUnFiU1sT2/JQnCbtVuI1Ydude27F4KBC2p96FJB8b2gKj/6MP0iKSXDXvVBSSqOfhtHTgSoewz9PsHDMDz/k96F4PS8VH5","1474674082000","16","20" <br>
>"2016-09-23 16:41:22","Tracking","D84TavTjVh5pfgBEPKWxfTNjFpK5simMc1KOLkHEtND5aMd/mGO934w45pNZKcDGf9JoG0mpqtcifX0DPBww7g==","1474674074675","WiFi++","Network++" <br>
>"2016-09-23 16:41:32","Tracking","EehaW5Lg7TcVZ5AWQWijUX4WaJc5MSPt1VX+QAuo1V3hT7a7wDVwABsVcfMtW1ID/TKwWURH3MYkXnykeL0GwaSXDXvVBSSqOfhtHTgSoezx9N5kYIevvwMwsfunbBDU","1474674091000","16","20" <br>
>"2016-09-23 16:41:32","Tracking","D84TavTjVh5pfgBEPKWxfTNjFpK5simMc1KOLkHEtND5aMd/mGO934w45pNZKcDGf9JoG0mpqtcifX0DPBww7g==","1474674074675","WiFi++","Network++" <br>
>"2016-09-23 16:41:42","Tracking","EehaW5Lg7TcVZ5AWQWijUUkbLBPM3KnHl3jhc5u+AEYH6mx26628KP9OkUxnuA34FHXpvYsAQUF4nNoUc7MPQbdxwQYNS0TD4z8AuUdH6VbxxObbTnB6pOYbvZPQfHkv","1474674100000","16","20" <br>
>"2016-09-23 16:41:42","Tracking","D84TavTjVh5pfgBEPKWxfU6mOFsiygMj9LBE22Yy1y03bP6qnxlsjmkaW2WXplFkPaXexh3HOr637C90yu7bRw==","1474674094739","WiFi++","Network++" <br>
>"2016-09-23 16:41:52","Tracking","EehaW5Lg7TcVZ5AWQWijUR6ntirw/SNGsaadZtglwpgT8r97PqBI9Fxuttt/mVxWjW996Mfrn8EGxFA64tR6yJwpjgDgwWuegivF8C1lcdOU81RRT7V3lAsjJN8+hzXa","1474674112000","12","12" <br>
>"2016-09-23 16:41:52","Tracking","D84TavTjVh5pfgBEPKWxfU6mOFsiygMj9LBE22Yy1y03bP6qnxlsjmkaW2WXplFkPaXexh3HOr637C90yu7bRw==","1474674094739","WiFi++","Network++" <br>
>"2016-09-23 16:42:02","Tracking","EehaW5Lg7TcVZ5AWQWijUakSuGn8MqXJilfELrbbRq6X10868XW0y/g1j+mGH0BXebkFBuP/olRySbSBtw/7rtTltOvzZFH+f0zqW5vLwhs6XbGsV1nKR49QjwClnDlf","1474674121000","16","20" <br>
>"2016-09-23 16:42:02","Tracking","D84TavTjVh5pfgBEPKWxfVSxmQWjsYmEy4g9Y7h/pepXcgWfbwNipXn4+1sHb9Xuf0ndZpYg5qeqM620ahssqA==","1474674114741","WiFi++","Network++" <br>
</small>

### Understanding the decrypted output

Here are the same lines from above decrypted as an example. The output is usually in a comma delimited csv file.

<small>
<blockquote>
"MAD092301","2016-09-23 16:41:22","Location[gps 34.066153,-118.197157 acc=4 et=+2m30s192ms alt=93.0 vel=1.25 bear=15.9 ]","1474674082000","16","20" <br>
"MAD092301","2016-09-23 16:41:22","Location[network 34.066201,-118.197012 acc=50 et=+2m22s794ms ]","1474674074675","WiFi++","Network++" <br>
"MAD092301","2016-09-23 16:41:32","Location[gps 34.066259,-118.197100 acc=3 et=+2m39s192ms alt=92.0 vel=1.25 bear=18.7 ]","1474674091000","16","20" <br>
"MAD092301","2016-09-23 16:41:32","Location[network 34.066201,-118.197012 acc=50 et=+2m22s794ms ]","1474674074675","WiFi++","Network++" <br>
"MAD092301","2016-09-23 16:41:42","Location[gps 34.066377,-118.197065 acc=3 et=+2m48s192ms alt=93.0 vel=1.25 bear=25.0 ]","1474674100000","16","20" <br>
"MAD092301","2016-09-23 16:41:42","Location[network 34.066287,-118.197149 acc=50 et=+2m42s858ms ]","1474674094739","WiFi++","Network++" <br>
"MAD092301","2016-09-23 16:41:52","Location[gps 34.066512,-118.197000 acc=3 et=+3m0s192ms alt=92.0 vel=1.25 bear=25.0 ]","1474674112000","12","12" <br>
"MAD092301","2016-09-23 16:41:52","Location[network 34.066287,-118.197149 acc=50 et=+2m42s858ms ]","1474674094739","WiFi++","Network++" <br>
"MAD092301","2016-09-23 16:42:02","Location[gps 34.066607,-118.196967 acc=3 et=+3m9s192ms alt=90.0 vel=1.0 bear=28.5 ]","1474674121000","16","20" <br>
"MAD092301","2016-09-23 16:42:02","Location[network 34.066230,-118.197057 acc=50 et=+3m2s860ms ]","1474674114741","WiFi++","Network++" <br>
</ blockquote>
</small>

Each line is one entry of location information. The first item is the subject ID in "MAD####" format. The second item is the timestamp when the entry is written to the output file in yyyy-MM-dd HH:mm:ss format. This timestamp is the clock time from the phone. Therefore, in case of daylight saving time or manual time change, we will see a rollback or jump in the timestamp.

The third item of each line is a character string containing the actual location readings from either gps or network. The network location is a combination of data from several sources including WiFi, LTE, 4G, and other cellular networks. The string also shows the latitude and longitude, accuracy of the estimate in meters, and the elapsed time since the phone's last reboot. This elapsed time increases monotonically, but it is associated with the time point when the location data is generated by the gps sensor or network, not necessarily corresponding to the timestamp of the phone clock. If the location record comes from the gps, it has an altitude in meters from the WGS 84 reference ellipsoid, which is not very reliable, and a velocity measured in m/s.

The fourth item of each line is a 12 digit unix timestamp in milliseconds at which the location data is generated by gps sensor or the network. It therefore may not reconcile to the time on the phone. When the location signal is lost, the phone will stop updating the positions, but it will keep writing the last known location to the output at preset intervals. In this case, the timestamp from the second item is increasing, but the timestamp from the fourth one stays the same.

The meanings of the last two items on each line vary by gps and network. When the location entry comes from gps, the 5th number means the number of satellites in use to generate the location, and the last number means the number of satellites available (in view) at this point. These two measurements, however, are real time, corresponding to the time stamp from second item. When the location entry comes from the network, the 5th item starts with "WiFi", and the first +/- shows the status of the WiFi adaptor, and the second +/- shows the status of WiFi connnection. "WiFi++" means the WiFi adaptor is turned on, and the phone is currently connected to WiFi network. The last item starts with "Network", and the first +/- shows the status of network connection, while the second +/- shows the status of WiFi connection. Therefore, "Network ++" would mean the phone is connected to network, and to WiFi; "Network+-" means that the phone is connected to network through maybe LTE, 4G, and other cellular channels, but not through WiFi. These two measurements, same as gps, are real time reconciling to the time stamp from the second item.

### Some caveats















