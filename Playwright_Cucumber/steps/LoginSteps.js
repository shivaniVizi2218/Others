const { When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../pages/LoginPage");
let loginPage = new LoginPage();

When(/^I am on the login page$/, async () => {
  await loginPage.launchApplication();
});

When(/^I login the application with valid credentials$/, async () => {
  await loginPage.loginApplication();
});

Then(/^I have to navigate to dashboard page$/, async () => {
  await loginPage.verifyDashboardURL();
});
