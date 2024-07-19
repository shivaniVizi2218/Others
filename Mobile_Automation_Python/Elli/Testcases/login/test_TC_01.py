import logging
from Testcases.conftest import appium_driver_setup, setup_appium_pages, logger_setup, run_around_tests, login_data


class Test_TC_01:

    def test_valid_sign_in(self, appium_driver_setup, setup_appium_pages, login_data):
        logging.getLogger("root").info("Starting test_valid_sign_in")
        # appium_driver, elli_login_page = setup_appium_pages
        # elli_login_page.perform_initial_actions()
        # elli_login_page.fill_and_submit_form(login_data['sequence_url'], login_data['events_url'])
        # assert elli_login_page.assert_logo_displayed_custom(), "Logo is not displayed after form submission"
        # logging.getLogger("root").info("Changing to stages Successfully")
        # logging.getLogger("root").info("Ending test_valid_sign_in")

    def test_valid_sign_in1(self, appium_driver_setup, setup_appium_pages, login_data):
        logging.getLogger("root").info("Starting test_valid_sign_in1")

    def test_valid_sign_in2(self, appium_driver_setup, setup_appium_pages, login_data):
        logging.getLogger("root").info("Starting test_valid_sign_in2")