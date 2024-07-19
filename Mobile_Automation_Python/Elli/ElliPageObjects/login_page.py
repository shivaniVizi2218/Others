# login_page.py

from selenium.webdriver.common.by import By
from Base.custom_code import Custom_code
import time


class ElliLoginPage(Custom_code):
    locators = {
        'android': {
            'Skip_btn': (By.ID, "com.lasership.eliv2.beta:id/tvSkip"),
            'elli_Bata_logo': (By.XPATH, "(//android.widget.ImageView)[2]"),
            'text_488': (By.XPATH, "//android.widget.TextView[@text='4.0.0/488']"),
            'base_sequence_url_input': (By.ID, "com.lasership.eliv2.beta:id/dialogTwoInputsFirstInput"),
            'base_events_url_input_field': (By.ID, "com.lasership.eliv2.beta:id/dialogTwoInputsSecondInput"),
            'submit_button': (By.ID, "com.lasership.eliv2.beta:id/dialogTwoInputsButtonFirst")
        },
        'ios': {
            # Add iOS locators here if needed
        }
    }

    def __init__(self, driver):
        super().__init__(driver)
        self.driver = driver

    def click_on_skip_element(self):
        self.ElementPresent_and_click(self.locators[self.platform]['Skip_btn'])

    def click_on_version_multiple_times(self, times):
        for _ in range(times):
            self.ElementPresent_and_click(self.locators[self.platform]['text_488'])

    def change_sequence_url(self, sequence_url):
        locator = self.locators[self.platform]['base_sequence_url_input']
        self.clear_field(locator)
        self.clear_field(locator)
        self.send_keys_to(locator, sequence_url)

    def change_events_url(self, events_url):
        locator = self.locators[self.platform]['base_events_url_input_field']
        self.clear_field(locator)
        self.send_keys_to(locator, events_url)

    def submit_form(self):
        self.ElementPresent_and_click(self.locators[self.platform]['submit_button'])

    def assert_logo_displayed_custom(self):
        return self.isElementPresent(self.locators[self.platform]['elli_Bata_logo'])

    def perform_initial_actions(self):
        self.click_on_skip_element()
        self.click_on_version_multiple_times(10)

    def fill_and_submit_form(self, sequence_url, events_url):
        self.change_sequence_url(sequence_url)
        self.change_events_url(events_url)
        self.submit_form()
