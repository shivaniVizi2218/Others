const { executeStep } = require("../utils/actions");

exports.PIMPage = class PIMPage {
  constructor(page, test) {
    this.page = page;
    this.test = test;
    this.labelPIM = page.locator("//span[text()='PIM']");
  }

  async navigateToPIMPage() {
    await executeStep(
      this.test,
      this.labelPIM,
      "click",
      "Clicking PIM label on dashboard"
    );
  }
};
