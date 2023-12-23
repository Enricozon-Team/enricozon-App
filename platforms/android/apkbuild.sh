#!/bin/bash

# Set JAVA_HOME
export JAVA_HOME=$(/usr/libexec/java_home -v 11)

# Change directory
cd /Users/Francesco/Documents/GitHub/enricozon-App

# Run cordova build android
cordova build android
