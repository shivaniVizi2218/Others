const { Before, AfterAll } = require("@cucumber/cucumber");
let page = require("@playwright/test");

Before(async () => {
  let browser = await page.chromium.launch({ headless: false });
  global.browser = browser;
  let context = await browser.newContext();
  global.page = await context.newPage();
  page = await context.newPage();
});

AfterAll(async () => {
  await global.browser.close();
});
