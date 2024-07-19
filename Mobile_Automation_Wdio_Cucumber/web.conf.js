const merge = require("deepmerge");
const wdioConf = require("./wdio.conf.js");
const path=require('path');
require('dotenv').config();
const appium = {
    
        "platformName": "android",
        "appium:deviceName": "emulator-5554",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.android.chrome",
        "appium:appActivity": "com.google.android.apps.chrome.Main",
        "appium:platformVersion": "14"
      
};

exports.config = merge(
  wdioConf.config,
  {
    capabilities: [appium],
  },
  { clone: false }
);
