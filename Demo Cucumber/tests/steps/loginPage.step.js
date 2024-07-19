const { Given, When, Then } = require("@cucumber/cucumber");

const LoginPage = require("../../pages/loginPage");
const loginPage = LoginPage;
Given(/^user navigate to the website$/, async () => {
  await loginPage.navigateToWebsite();
});

When(/^user navigate to register portal$/, async () => {
  await loginPage.navigateToRegister();
});

When(/^user enters the credentials$/, { timeout: 10000 }, async () => {
  await loginPage.enterCredentials();
});
