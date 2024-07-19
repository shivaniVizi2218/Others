const { test } = require("@playwright/test");
const runAccessibility = require("../utils/runAccessibility");
const sections = require("../pages/pageIndex");
require("dotenv").config();
const fs = require("fs");
let context, page;

test.beforeAll("Setup", async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  const reportDir = "accessibility-reports";
  if (fs.existsSync(reportDir)) {
    fs.rmdirSync(reportDir, { recursive: true });
    console.log("Deleted existing reports before test run");
  }
  await page.goto(process.env.LOGIN_URL);
});

test.afterAll("Teardown", async () => {
  await context.close();
  await page.close();
});
test("Should Not have any Automatically detectable Accessibility Issues", async () => {
  await runAccessibility(page);

  const loginPage = new sections.LoginPage(page, test);
  await loginPage.loginApplication(
    [process.env.VALID_USERNAME],
    [process.env.PASSWORD]
  );
  await page.waitForTimeout(parseInt(process.env.MEDIUM_WAIT));
  await runAccessibility(page);

  const pimPage = new sections.PIMPage(page, test);
  await pimPage.navigateToPIMPage();
  await page.waitForTimeout(parseInt(process.env.MEDIUM_WAIT));
  await runAccessibility(page);
});
