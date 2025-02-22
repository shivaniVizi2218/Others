const { executeStep } = require("../utils/actions");
require("dotenv").config();

exports.dashboardPage = class dashboardPage {
  constructor(page, test) {
    this.page = page;
    this.test = test;
    this.dropdownProfile = page.locator("//i[contains(@class,'userdropdown')]");
    this.labelLogOut = page.locator("//a[text()='Logout']");
  }

  async logOut() {
    await executeStep(this.test, this.dropdownProfile, "click");
    await executeStep(
      this.test,
      this.labelLogOut,
      "click",
      "Logged out from the application"
    );
  }
};
