#!/bin/sh
basedir=`dirname "$0"`
open -a Terminal $basedir/..
osascript -e 'tell application "Terminal" to do script "source InitNodeEnv" in selected tab of the front window'