const registerDetails = require("../test_data/data.json");
class LoginPage {
  get labelRegister() {
    return global.page.locator("//a[text()='Register']");
  }
  inputFirstName() {
    return global.page.locator("//input[contains(@id,'firstName')]");
  }
  inputLastName() {
    return global.page.locator("//input[contains(@id,'lastName')]");
  }
  inputAddrStreet() {
    return global.page.locator("//input[contains(@id,'street')]");
  }
  inputAddrCity() {
    return global.page.locator("//input[contains(@id,'city')]");
  }
  inputAddrState() {
    return global.page.locator("//input[contains(@id,'state')]");
  }
  inputAddrZipcode() {
    return global.page.locator("//input[contains(@id,'zipCode')]");
  }
  inputPhoneNumber() {
    global.page.locator("//input[contains(@id,'phoneNumber')]");
  }
  inputSSN() {
    return global.page.locator("//input[contains(@id,'ssn')]");
  }
  inputUsername() {
    return global.page.locator("//input[contains(@id,'username')]");
  }
  inputPswd() {
    return global.page.locator("//input[contains(@id,'password')]");
  }
  inputConfirmPswd() {
    return global.page.locator("//input[contains(@id,'repeatedPassword')]");
  }
  btnRegister() {
    return global.page.locator("//input[@value='Register']");
  }
  inputDetails(value) {
    return global.page.locator(`//input[@value='${value}']`);
  }

  async navigateToWebsite() {
    await global.page.goto(
      "https://parabank.parasoft.com/parabank/services.htm",
      { timeout: 10000 }
    );
  }

  async navigateToRegister() {
    await this.labelRegister.click();
  }

  async enterCredentials() {
    //await global.page.waitForSelector(this.inputFirstName);
    //await global.page.waitForTimeout(5000);
    await this.inputFirstName().fill("test");
    await this.inputFirstName().fill("test");
    await this.inputLastName().fill("test");
    await this.inputAddrStreet().fill("test");
    await this.inputAddrCity().fill("test");
    await this.inputAddrState().fill("test");
    await this.inputAddrZipcode().fill("test");
    await this.inputPhoneNumber().fill("1234");
    await global.page.waitForTimeout(5000);

    await this.inputSSN().fill("test");
    await this.inputUsername().fill("test");
    await this.inputPswd().fill("test");
    await this.inputConfirmPswd().fill("test");

    //await this.inputDetails(details).fill("test");
    //await global.page.waitForTimeout(5000);
    // for (const data of registerDetails.register) {
    //   await this.inputDetails(data).click();
    //   await this.inputDetails(data).fill("test");
    // }
  }
}
module.exports = new LoginPage();
