const { BeforeAll, AfterAll, After, Status } = require("@cucumber/cucumber");
const page = require("@playwright/test");
const fs = require("fs");

BeforeAll(async () => {
  let browser = await page.chromium.launch({ headless: false });
  global.browser = browser;
  global.context = await browser.newContext();
  global.page = await global.context.newPage();
});

AfterAll(async () => {
  if (global.browser) {
    await global.browser.close();
  }
});

After(async ({ result }) => {
  if (result.status !== Status.PASSED) {
    try {
      const timestamp = Date.now();
      const folderPath = "./failureScreenshots"; // Specify the folder path
      const screenshotPath = `${folderPath}/screenshot-${timestamp}.png`; // Updated path
      await global.page.screenshot({ path: screenshotPath });
    } catch (error) {
      console.error("Failed to capture screenshot:", error);
    }
  }
});
