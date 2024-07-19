const { test, expect } = require("@playwright/test");
const { AxeBuilder } = require("@axe-core/playwright");
const { createHtmlReport } = require("axe-html-reporter");
const fs = require("fs");

test("Validating Accessibility Issues", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  // console.log("snapshot -->", await page.accessibility.snapshot());
  const results = await new AxeBuilder({ page }).analyze();
  console.log("results page ----->", results);
  // const loginButtonLocator = page.locator(
  //   "//button[normalize-space()='Login']"
  // );
  // const loginButtonElement = loginButtonLocator.first();
  // const results = await new AxeBuilder({ page })
  //   .include(loginButtonElement)
  //   .analyze();

  const reportHTML = createHtmlReport({
    results: results,
    options: {
      projectKey: "OrangeHRM",
    },
  });

  if (!fs.existsSync("reports/accessibility-report.html")) {
    fs.mkdirSync("reports", {
      recursive: true,
    });
  }
  fs.writeFileSync("reports/accessibility-report.html", reportHTML);

  // const reportPath = path.join(
  //   __dirname,
  //   "reports",
  //   "accessibility-report3.html"
  // );
  // exec(`start "" "${reportPath}"`, (error) => {
  //   if (error) {
  //     console.error(`Error opening report: ${error}`);
  //     return;
  //   }
  // });
  expect(results.violations).toEqual([]);
});
