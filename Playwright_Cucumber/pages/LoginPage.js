const { expect } = require("@playwright/test");
require("dotenv").config();

class LoginPage {
  async launchApplication() {
    await global.page.goto(process.env.WEB_URL);
  }
  async loginApplication() {
    await global.page
      .locator('//input[@placeholder="Username"]')
      .waitFor({ status: "visible" });
    await global.page
      .locator('//input[@placeholder="Username"]')
      .fill(process.env.VALID_USERNAME);
    await global.page
      .locator('//input[@placeholder="Password"]')
      .fill(process.env.PASSWORD);
    await global.page.locator('//button[@type="submit"]').click();
  }
  async verifyDashboardURL() {
    expect(await global.page.url()).toEqual(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  }
}
module.exports = { LoginPage };
