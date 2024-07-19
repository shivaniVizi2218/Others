import pytest
from playwright.sync_api import Playwright, Page


@pytest.fixture
def set_up_tear_down_browser(playwright: Playwright):
    browser = playwright.chromium.launch(headless=False, slow_mo=1000)
    # or def set_up_tear_down_browser(browser):
    context = browser.new_context()
    # open new page
    page = context.new_page()
    # Go to URL
    page.set_viewport_size({"width": 1366, "height": 768})
    page.goto("https://www.saucedemo.com/")
    # return page
    yield page

    context.close()
    browser.close()


@pytest.fixture
def set_up_tear_down_page(page: Page):
    page.set_viewport_size({"width": 1366, "height": 768})
    page.goto("https://www.saucedemo.com/")
    yield page
    # when using page fixture, no need to launch and close browser separately
    # by default, page fixture handles it
