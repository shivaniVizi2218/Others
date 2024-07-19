from playwright.sync_api import Playwright, sync_playwright, expect


def run(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=False, slow_mo=1000)
    context = browser.new_context()
    page = context.new_page()

    page.goto("https://www.saucedemo.com/")
    page.locator("//input[@id='user-name']").fill("standard_user")
    page.locator("//input[@id='password']").fill("secret_sauce")
    page.locator("//input[@id='login-button']").click()
    assert page.locator("//span[@class='title']").is_visible(), "Log-in is not successful"
    page.locator("//button[@id='react-burger-menu-btn']").click()
    page.locator("//a[normalize-space()='Logout']").click()
    assert page.locator("//input[@id='login-button']").is_visible()

    context.close()
    browser.close()


with sync_playwright() as playwright:
    run(playwright)
