const { test, expect } = require("@playwright/test");
const sections = require("../pages/pageIndex");
const data = require("../data/orangeHRMData.json");
require("dotenv").config();

test("TC_001, TC_002 - Verify Forgot your password interface", async ({
  page,
}) => {
  const loginPage = new sections.Login(page, test);
  await loginPage.launchMainUrl();
  await expect(
    loginPage.labelForgotPassword,
    "Checking whether 'Forgot your password' label is visible"
  ).toBeVisible();
  await loginPage.clickForgotPassword();
  await expect(
    page,
    "Checking whether it navigated to Reset Password page"
  ).toHaveURL(process.env.RESET_PSWD_URL);
  await loginPage.resetPassword([process.env.BASE_USERNAME]);
  await expect(
    loginPage.titleSentLink,
    "Sent reset password link successfully"
  ).toHaveText(data.reset_password.title);
});

test("TC_003 - Login the Application with valid credentials", async ({
  page,
}) => {
  const loginPage = new sections.Login(page, test);
  await loginPage.launchMainUrl();
  await loginPage.loginApplication(
    [process.env.BASE_USERNAME],
    [process.env.PASSWORD]
  );
  const homePage = new sections.HomePage(page, test);
  await expect(page, "Navigated to Home Page").not.toHaveURL(
    process.env.DASHBOARD_URL
  );
  await homePage.logOut();
});
