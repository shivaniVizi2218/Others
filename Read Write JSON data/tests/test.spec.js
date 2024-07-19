const { test, expect } = require("@playwright/test");
const sections = require("../pages/pageIndex");
const data = require("../test_data/url.json");
const details = require("../utils/faker_data");
require("dotenv").config();
let context, page;

test.beforeEach("Launching URL", async ({ browser }) => {
  context = await browser.newContext();
  page = await browser.newPage();
  const loginPage = new sections.LoginPage(page, test);
  await loginPage.launchMainUrl();
  await page.waitForTimeout(parseInt(process.env.MEDIUM_WAIT));
});

test.afterEach(async () => {
  const dashboardPage = new sections.dashboardPage(page, test);
  await dashboardPage.logOut();
  await page.close();
  await context.close();
});

test("Valid Login", async () => {
  const loginPage = new sections.LoginPage(page, test);
  await loginPage.loginApplication(
    [process.env.WEB_USERNAME],
    [process.env.WEB_PASSWORD]
  );
  await expect(page, "Navigated to Home Page").toHaveURL(data.dashboard);
  await page.waitForTimeout(parseInt(process.env.SMALL_WAIT));
  const pimPage = new sections.PIMPage(page, test);
  await pimPage.navigateToPIMPortal();
  await pimPage.navigateToAddEmployee();
  await expect(
    page,
    "Checking whether it navigated to 'Add Employee' in PIM portal"
  ).toHaveURL(data.add_employee);
  await pimPage.enterEmployeeFullName(
    details.fakerData.firstname,
    details.fakerData.lastname
  );
  await expect(
    pimPage.checkboxCreateLogin,
    "Checking whether Create Login is in disable mode"
  ).not.toBeChecked();
  await pimPage.enableCreateLoginDetails();
});
