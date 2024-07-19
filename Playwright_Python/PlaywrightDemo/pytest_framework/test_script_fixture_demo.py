import pytest
from playwright.sync_api import expect


def test_01_valid_login(set_up_tear_down_browser) -> None:
    page = set_up_tear_down_browser
    page.locator("//input[@id='user-name']").fill("standard_user")
    page.locator("//input[@id='password']").fill("secret_sauce")
    page.locator("//input[@id='login-button']").click()
    assert page.locator("//span[@class='title']").is_visible(), "User not logged-in successfully"
    page.locator("//button[@id='react-burger-menu-btn']").click()
    page.locator("//a[normalize-space()='Logout']").click()
    assert page.locator("//input[@id='login-button']").is_visible(), "Unable to log-out"


@pytest.mark.skip(reason="No need to implement")
def test_02_handle_page_fixture(set_up_tear_down_page) -> None:
    page = set_up_tear_down_page
    page.locator("//input[@id='user-name']").fill("standard_user")
    page.locator("//input[@id='password']").fill("secret_sauce")
    page.locator("//input[@id='login-button']").click()
    assert page.locator("//span[@class='title']").is_visible(), "User not logged-in successfully"


def test_03_invalid_login(set_up_tear_down_page) -> None:
    page = set_up_tear_down_page
    page.locator("//input[@id='user-name']").fill("standard_user")
    page.locator("//input[@id='password']").fill("invalid_sauce")
    page.locator("//input[@id='login-button']").click()
    expect(page.locator("//span[@class='title']")).not_to_be_visible()
    page.locator("//div[contains(@class,'error-message')]").wait_for()
    assert page.locator("//div[contains(@class,'error-message')]").is_visible()
    error_msg = page.locator("//div[contains(@class,'error-message')]").inner_text()
    print("\n error msg -> ", error_msg)
    actual_error_msg = "Username and password do not match any user in this service"
    expect(page.locator("//div[contains(@class,'error-message')]")).to_contain_text(actual_error_msg)
    assert actual_error_msg in error_msg, "Valid error message not displayed"


@pytest.mark.parametrize("username, password", [pytest.param("standard_user", "secret_sauce", marks=pytest.mark.xfail),
                                                ("visual_user", "secret_sauce"),
                                                pytest.param("invalid_user", "invalid", marks=pytest.mark.xfail)])
def test_o4_parametrize_logins(set_up_tear_down_page, username, password) -> None:
    page = set_up_tear_down_page
    page.locator("//input[@id='user-name']").fill(username)
    page.locator("//input[@id='password']").fill(password)
    page.locator("//input[@id='login-button']").click()
    assert page.locator("//span[@class='title']").is_visible(), "User not logged-in successfully"
    page.locator("//button[@id='react-burger-menu-btn']").click()
    page.locator("//a[normalize-space()='Logout']").click()
    assert page.locator("//input[@id='login-button']").is_visible(), "Unable to log-out"
