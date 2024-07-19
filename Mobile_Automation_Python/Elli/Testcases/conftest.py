import os
import logging
import pytest
from selenium import webdriver
from appium.webdriver.appium_service import AppiumService
from appium.options.common import AppiumOptions
from Utilities.read_properties import read_json_file, read_config_data
from ElliPageObjects.login_page import ElliLoginPage
from Utilities.common_util import file_path


@pytest.fixture(autouse=True, scope='session')
def logger_setup(request):
    logger_name = "root"
    root_logger = logging.getLogger(logger_name)
    root_logger.setLevel(logging.INFO)
    formatter = logging.Formatter(fmt='%(asctime)s - %(levelname)s - %(name)s : %(message)s',
                                  datefmt='%m/%d/%Y %I:%M:%S %p')
    # Adding console handler for displaying logs in the console
    consoleHandler = logging.StreamHandler()
    consoleHandler.setFormatter(formatter)
    root_logger.addHandler(consoleHandler)
    fileHandler = None
    current_dir, _, _ = file_path()
    log_folder = os.path.join(current_dir, '..')
    try:
        log_file = os.path.join(log_folder, 'test_logs.log')
        fileHandler = logging.FileHandler(log_file, mode='w')
        fileHandler.setFormatter(formatter)
        root_logger.addHandler(fileHandler)
    except Exception as e:
        print(f"Error creating log folder or file: {e}")

    # Suppressing urllib3 logs to avoid clutter
    urllib3_logger = logging.getLogger('urllib3')
    urllib3_logger.setLevel(logging.ERROR)
    consoleHandler.setLevel(logging.ERROR)

    # Clean up log handlers to avoid duplicate log entries
    yield
    root_logger.removeHandler(consoleHandler)
    if fileHandler:
        root_logger.removeHandler(fileHandler)
        fileHandler.close()


@pytest.fixture(autouse=True, scope='function')
def run_around_tests():
    print("Setting up test:")
    logging.getLogger("root").warning("Before each test")
    yield
    print("Tear Down test:")
    logging.getLogger("root").warning("After each test")


@pytest.fixture(scope="function")
def setup_appium_pages(appium_driver_setup):
    appium_driver = appium_driver_setup
    elli_login_page = ElliLoginPage(appium_driver)
    return appium_driver, elli_login_page


@pytest.hookimpl(hookwrapper=True)
def pytest_pyfunc_call():
    logging.getLogger("root").info("Before yield")
    yield
    logging.getLogger("root").info("After yield")


# Fixture for Appium driver setup
@pytest.fixture(scope="function")
def appium_driver_setup(request):
    _, CONFIG_PATH, _ = file_path()
    mobile_config = read_config_data(CONFIG_PATH, 'Mobile')
    appium_service = AppiumService()
    appium_service.start()
    cap = {
        "deviceName": mobile_config['device_name'],
        "platformName": mobile_config['platform_name'],
        "automationName": mobile_config['automation_name'],
        "appActivity": mobile_config['app_activity'],
        "appPackage": mobile_config['app_package'],
        "platformVersion": mobile_config['platform_version'],
    }
    driver = webdriver.Remote(mobile_config['appium_server_url'], options=AppiumOptions().load_capabilities(cap))
    try:
        yield driver
    finally:
        driver.quit()
        appium_service.stop()


@pytest.fixture()
def login_data():
    current_dir, CONFIG_PATH, LOGIN_PATH = file_path()
    return read_json_file(LOGIN_PATH)
