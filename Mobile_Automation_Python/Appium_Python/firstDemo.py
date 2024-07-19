from appium import webdriver
from typing import Any, Dict
from appium.options.common import AppiumOptions
from appium.webdriver.common.appiumby import AppiumBy

cap: Dict[str, Any] = {
    "platformName": "Android",
    "appium:deviceName": "emulator-5554",
    "appium:automationName": "UiAutomator2",
    "appium:appPackage": "com.lasership.eliv2.beta",
    "appium:appActivity": "com.lasership.eli.ui.splash.SplashActivity",
    "appium:platformVersion": "14",
    "appium:autoAcceptAlerts": "true",
    "appium:noReset": "false"

}

url = "http://localhost:4723"

driver = webdriver.Remote(url, options=AppiumOptions().load_capabilities(cap))

ele = driver.find_element(by=AppiumBy.XPATH,
                          value="//android.widget.Button[@resource-id='com.letyshops:id/registration_btn']")

ele.click()
driver.quit()
