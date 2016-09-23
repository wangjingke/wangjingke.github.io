---
layout: post
title: "Multiple ways to schedule repeated tasks in android"
date: 2016-09-23
---

In the past a couple weeks, I have been developing a location tracking app for the USC MADRES study. We need a customized app for our study because first, the location data from participants are considered sensible information by the IRB, and have to be encrypted; second, we want to separate signals from the GPS and from the network for good research reasons. Details about the app belong to another post on another day. It turns out that the key to the app is to find a way to perform a task (such as recording the location) on the phone periodically and consistently. Here I want to summarize all sorts of the methods I tried in order to achieve this goal, and my tears and joys during the process.

The simplest solution is a timer, but a timer has certain limitations as described in the
