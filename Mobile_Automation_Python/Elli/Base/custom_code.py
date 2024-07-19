import os
import time
from datetime import datetime
import logging
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver import ActionChains


class Custom_code:

    def __init__(self, driver):
        self.driver = driver
        self.driver.implicitly_wait(10)

    @property
    def platform(self):
        return 'android' if self.driver.capabilities['platformName'].lower() == 'android' else 'ios'

    def get_by_type(self, locator_type):
        locator_type = locator_type.lower()

        if locator_type == "id":
            return By.ID
        elif locator_type == "xpath":
            return By.XPATH
        elif locator_type == "name":
            return By.NAME
        elif locator_type == "link":
            return By.LINK_TEXT
        elif locator_type == "css":
            return By.CSS_SELECTOR
        elif locator_type == "class":
            return By.CLASS_NAME
        elif locator_type == "partial link":
            return By.PARTIAL_LINK_TEXT
        elif locator_type == "tag":
            return By.TAG_NAME
        else:
            return False

    def get_element(self, locator):
        element = None
        try:
            locator_type = locator[0]
            locator_value = locator[1]
            by_type = self.get_by_type(locator_type)
            element = self.driver.find_element(by_type, locator_value)
            return element
        except Exception as e:
            logging.getLogger("root").error(f"Exception in get_element: {str(e)}")
            return None

    def click_on_element(self, locator):
        try:
            element = self.get_element(locator)
            element.click()
        except Exception as e:
            logging.getLogger("root").error(f"Failed to click on element with locator {locator}: {str(e)}")

    def clear_field(self, locator):
        try:
            element = self.get_element(locator)
            element.clear()
        except Exception as e:
            logging.getLogger("root").error(f"Failed to clear field with locator {locator}: {str(e)}")

    def send_keys_to(self, locator, data):
        try:
            element = self.get_element(locator)
            element.send_keys(data)
        except Exception as e:
            logging.getLogger("root").error(f"Failed to send keys '{data}' to element with locator {locator}: {str(e)}")

    def isElementPresent(self, locator):
        try:
            element = self.get_element(locator)
            if element is not None:
                return True
            else:
                logging.getLogger("root").info(f"Element not present with locator: {locator}")
                return False
        except Exception as e:
            logging.getLogger("root").error(f"Exception checking element presence with locator {locator}: {str(e)}")
            return False

    def ElementPresent_and_click(self, locator):
        try:
            element = self.get_element(locator)
            if element is not None:
                element.click()
                return True
            else:
                logging.getLogger("root").info(f"Element not found for clicking with locator: {locator}")
                return False
        except Exception as e:
            logging.getLogger("root").error(f"Failed to click on element with locator {locator}: {str(e)}")
            return False

    def take_screenshot(self, testcase_name="", module_name=""):
        try:
            test_name = testcase_name.replace(" ", "_")
            test_name = test_name.replace(" ", "_")
            date = datetime.now().strftime("%I:%M%p on %B %d, %Y")
            date = date.replace('', "_")
            date = date.replace(':', "_")
            date = date.replace(',', '')
            date = "_DATE_" + date

            fileDir = os.path.dirname(os.path.abspath(__file__))
            file_path = os.path.dirname(fileDir) + "\\Screenshots\\" + module_name + "\\" + testcase_name + date + '.png'

            self.driver.save_screenshot(file_path)
            logging.getLogger("root").info(f"Screenshot saved: {file_path}")
        except Exception as e:
            logging.getLogger("root").error(f"Failed to take screenshot: {str(e)}")

    def select_values_from_drop_down_textContent(self, dropDownOptionsList, value):
        try:
            element_find = "N"
            for element in dropDownOptionsList:
                time.sleep(3)
                if element.get_attribute('textContent') == value:
                    element.click()
                    element_find = "y"
                    break
            if element_find == "N":
                logging.getLogger("root").warning(f"Cannot select value from dropdown: {value}")
        except Exception as e:
            logging.getLogger("root").error(f"Failed to select value from dropdown: {str(e)}")

    def select_values_from_drop_down_index(self, dropDownOptionsList, value):
        try:
            element_find = "N"
            for element in dropDownOptionsList:
                if element.get_attribute('data-offset-index') == value:
                    element.click()
                    element_find = "y"
                    break
            if element_find == "N":
                logging.getLogger("root").warning(f"Cannot select value from dropdown by index: {value}")
        except Exception as e:
            logging.getLogger("root").error(f"Failed to select value from dropdown by index: {str(e)}")

    def wait_for_element_clickable(self, locator, timeOut=10):
        try:
            WebDriverWait(self.driver, timeOut).until(EC.element_to_be_clickable(self.get_by_type(locator[0]), locator[1]))
        except Exception as e:
            logging.getLogger("root").error(f"Timed out waiting for element to be clickable: {str(e)}")

    def wait_for_element_not_clickable(self, locator, timeOut=10):
        try:
            WebDriverWait(self.driver, timeOut).until_not(EC.element_to_be_clickable(self.get_by_type(locator[0]), locator[1]))
        except Exception as e:
            logging.getLogger("root").error(f"Timed out waiting for element to not be clickable: {str(e)}")

    def context_click(self, locator):
        try:
            action = ActionChains(self.driver)
            action.context_click(self.get_element(locator)).perform()
            logging.getLogger("root").info(f"Performed context click on element with locator: {locator}")
        except Exception as e:
            logging.getLogger("root").error(f"Failed to perform context click on element with locator {locator}: {str(e)}")

    def get_elements(self, locator):
        elements = None
        try:
            locator_type = locator[0]
            locator_value = locator[1]
            by_type = self.get_by_type(locator_type)
            elements = self.driver.find_elements(by_type, locator_value)
            logging.getLogger("root").info(f"Found {len(elements)} elements with locator: {locator}")
            return elements
        except Exception as e:
            logging.getLogger("root").error(f"Failed to find elements with locator {locator}: {str(e)}")
            return None

    def page_refresh_and_wait(self, timeOut=5):
        try:
            self.driver.refresh()
            time.sleep(timeOut)
        except Exception as e:
            logging.getLogger("root").error(f"Failed to refresh page: {str(e)}")

    def select_values_from_drop_down_with_JS(self, dropDownOptionsList, value, timeOut=10):
        try:
            element_find = "N"
            for element in dropDownOptionsList:
                if element.text == value:
                    WebDriverWait(self.driver, timeOut).until(EC.element_to_be_clickable(element))
                    self.driver.execute_script("arguments[0].click();", element)
                    element_find = "y"
                    break
            if element_find == "N":
                logging.getLogger("root").warning(f"Cannot select value from dropdown with JS: {value}")
        except Exception as e:
            logging.getLogger("root").error(f"Failed to select value from dropdown with JS: {str(e)}")

    def select_values_from_drop_down_textContent_JS(self, dropDownOptionsList, value, timeOut=10):
        try:
            element_find = "N"
            for element in dropDownOptionsList:
                if element.get_attribute('textContent') == value:
                    self.driver.execute_script("arguments[0].click();", element)
                    element_find = "y"
                    break
            if element_find == "N":
                logging.getLogger("root").warning(f"Cannot select value from dropdown with JS using textContent: {value}")
        except Exception as e:
            logging.getLogger("root").error(f"Failed to select value from dropdown with JS using textContent: {str(e)}")

    def sleep1(self):
        time.sleep(1)

    def sleep2(self):
        time.sleep(2)

    def sleep3(self):
        time.sleep(3)

    def sleep5(self):
        time.sleep(5)

    def imp_wait_20(self):
        self.driver.implicitly_wait(20)

    def imp_wait_20_and_then_sleep1(self):
        self.driver.implicitly_wait(20)
        time.sleep(1)

    def imp_wait_20_and_then_sleep2(self):
        self.driver.implicitly_wait(20)
        time.sleep(2)

    def imp_wait_8_and_then_sleep2(self):
        self.driver.implicitly_wait(8)
        time.sleep(2)

    def imp_wait_5_and_then_sleep2(self):
        self.driver.implicitly_wait(5)
        time.sleep(2)
