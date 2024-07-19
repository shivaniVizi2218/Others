const { test, expect } = require("@playwright/test");

test("demo", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  expect(await page.screenshot()).toMatchSnapshot("index.png");
});
