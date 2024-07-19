const merge = require("deepmerge");
const wdioConf = require("./wdio.conf.js");
const path=require('path');
require('dotenv').config();
const appium = {
 "platformName": process.env.PlatformName,
  "appium:deviceName": process.env.deviceName,
  "appium:automationName": process.env.automationName,
  "appium:appPackage": process.env.appPackage,
  "appium:appActivity": process.env.appActivity,
  "appium:app":path.join(process.cwd(),process.env.app),
  "appium:platformVersion": process.env.platformVersion,
};

exports.config = merge(
  wdioConf.config,
  {
    capabilities: [appium],
  },
  { clone: false }
);
