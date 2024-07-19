from playwright.sync_api import Playwright


def test_login_with_valid_credentials(playwright: Playwright) -> None:
    # The -> None part of the function definition is a type hint that specifies
    # that this function does not return any value.
    browser = playwright.chromium.launch(headless=False, slow_mo=1000)
    context = browser.new_context()
    page = context.new_page()

    page.goto("https://www.saucedemo.com/")
    page.locator("//input[@id='user-name']").fill("standard_user")
    page.locator("//input[@id='password']").fill("secret_sauce")
    page.locator("//input[@id='login-button']").click()
    assert page.locator("//span[@class='title']").is_visible(), "User not logged-in successfully"
    page.locator("//button[@id='react-burger-menu-btn']").click()
    page.locator("//a[normalize-space()='Logout']").click()
    assert page.locator("//input[@id='login-button']").is_visible()
    context.close()
    browser.close()



