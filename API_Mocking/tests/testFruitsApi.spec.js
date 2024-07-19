const { test, expect } = require("@playwright/test");
const { name } = require("../playwright.config");

test("mock a fruit list and does not call the actual api", async ({ page }) => {
  await page.route("*/**/api/v1/fruits", async (route) => {
    const json = [{ name: "Testing", id: 30 }];
    await route.fulfill({ json });
  });
  await page.goto("https://demo.playwright.dev/api-mocking/");
  await expect(page.getByText("Testing")).toBeVisible();
});

test("gets the json from api and adds a new fruit", async ({ page }) => {
  await page.route("*/**/api/v1/fruits", async (route) => {
    const response = await route.fetch();
    const json = await response.json();
    json.push({ name: "Loquat", id: 100 });

    await route.fulfill({ response, json });
  });

  await page.goto("https://demo.playwright.dev/api-mocking");

  await expect(page.getByText("Loquat", { exact: true })).toBeVisible();
});
