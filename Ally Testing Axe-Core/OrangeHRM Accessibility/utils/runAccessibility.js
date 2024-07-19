const { expect } = require("@playwright/test");
const { AxeBuilder } = require("@axe-core/playwright");
const { createHtmlReport } = require("axe-html-reporter");
require("dotenv").config();

async function runAccessibility(page) {
  let currentURL = await page.url();
  //let pageName = currentURL.split("index.php/")[1].replace("/", "_");
  let pageName = currentURL.replace(process.env.BASE_URL, "").replace("/", "_");
  console.log(
    "\n",
    "fetch page details:",
    "\n",
    " PAGE NAME --->",
    pageName,
    "\n",
    "CURRENT URL --->",
    currentURL
  );
  await page.goto(currentURL);
  await page.waitForTimeout(parseInt(process.env.MEDIUM_WAIT));
  //const results = await new AxeBuilder({ page }).analyze();     // Scanning an entire page
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze(); // Scanning for WCAG violations
  //console.log("results page ----->", results);
  createHtmlReport({
    results: results,
    options: {
      projectKey: "OrangeHRM",
      outputDir: "accessibility-reports",
      reportFileName: `${pageName}.html`,
    },
  });
  expect(results.violations).not.toEqual([]);
}

module.exports = runAccessibility;
