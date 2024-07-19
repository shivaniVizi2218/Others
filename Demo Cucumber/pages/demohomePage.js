const { expect } = require("@playwright/test");
require("dotenv").config();

class HomePage {
  get labelShop() {
    return global.page.locator("//a[text()='Shop']");
  }
  get labelHome() {
    return global.page.locator("//a[text()='Home']");
  }
  get arrivalItems() {
    return global.page.locator(
      "//h2[text()='new arrivals']/following::ul[@class='products']"
    );
  }
  get imgHTML() {
    return global.page.locator(
      "//h3[text()='Thinking in HTML']//preceding-sibling::img"
    );
  }
  get btnAddToBasket() {
    return global.page.locator("//button[text()='Add to basket']");
  }
  get msgAddedToBasket() {
    return global.page.locator("//div[contains(@class,'message')]");
  }

  async launchWebsite() {
    await global.page.goto(process.env.WEB_URL);
  }

  async navigateToShop() {
    await this.labelShop.click();
  }

  async navigateToHome() {
    await this.labelHome.click();
  }

  async verifyArrivalsCount() {
    const arrivalsCount = await this.arrivalItems.count();
    console.log("count ->", arrivalsCount);
    expect(
      arrivalsCount,
      "Verify whether the Home page has Three Arrivals only"
    ).toBe(3);
  }

  async clickingImage() {
    await this.imgHTML.click();
  }

  async verifyPageNavigation() {
    const currentUrl = await global.page.url();
    console.log("url --->", currentUrl);
    expect(
      currentUrl,
      "Verifying whether it navigated to image related page"
    ).toContain("html");
  }

  async addItem() {
    await this.btnAddToBasket.click();
  }
}
module.exports = new HomePage();
