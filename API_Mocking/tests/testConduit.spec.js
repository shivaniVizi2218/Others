const { test, expect } = require("@playwright/test");

test("Mock list of tags without calling API", async ({ page }) => {
  await page.route("**/*/api/tags", async (route) => {
    const json = {
      tags: ["Science", "automationautomation"],
    };
    await route.fulfill({ json });
  });

  await page.goto("https://conduit-realworld-example-app.fly.dev");
  await expect(page.getByText("Science")).toBeVisible();
  await expect(page.getByText("automationautomation")).toBeVisible();
});

test("Get the data from tags API and add a new tag", async ({ page }) => {
  await page.route("**/*/api/tags", async (route) => {
    const response = await route.fetch();
    const json = await response.json();
    console.log(json);
    json.tags.unshift("Selenium");
    await route.fulfill({ response, json });
  });
  await page.goto("https://conduit-realworld-example-app.fly.dev");
  await expect(page.getByText("Selenium")).toBeVisible();
});

test("Mock the articles api", async ({ page }) => {
  await page.route("**/*/api/articles", async (route) => {
    const json = [
      {
        slug: "testing13",
        title: "Testing13",
        description: "Testing",
        body: "Testing methods",
      },
    ];
    route.fulfill({ status: 200, json });
  });
  await page.goto("https://conduit-realworld-example-app.fly.dev");
  await expect(page.getByText("Testing13")).toBeVisible();
});

test("Mock api with query parameters", async ({ page }) => {
  await page.route(
    "**/*/api/articles?articles?limit=3&&offset=3",
    async (route) => {
      const json = [
        {
          slug: "article1",
          title: "article1",
          description: "article1",
          body: "article123456",
        },
      ];
      route.fulfill({ status: 200, json });
    }
  );
  await page.goto("https://conduit-realworld-example-app.fly.dev");
  //await expect(page.locator("body")).toHaveText("article1", { timeout: 10000 });
  await expect(page.getByText("article1")).toBeVisible();
  //await expect(page.locator("//h1")).toHaveText("article1");
  //   const html = await page.content();
  //   console.log(html);
  //   await page.setContent(html);
  //   //await expect(page.locator("body")).toHaveText("article1");
  //await expect(page.locator("body")).toHaveText(/article1/);
  await page.waitForLoadState();
  // await expect(page.getByText("article1")).toBeVisible();
});

test("Record the HAR file", async ({ page }) => {
  await page.routeFromHAR("./har/tags.har", {
    url: "*/**/api/tags",
    update: true,
  });
  await page.goto("https://conduit-realworld-example-app.fly.dev");
});
test("Read the HAR file", async ({ page }) => {
  // Get the response from the HAR file
  await page.routeFromHAR("./har/tags.har", {
    url: "*/**/api/tags",
    update: false,
  });
  // Go to the page
  await page.goto("https://conduit-realworld-example-app.fly.dev/");
  // Assert that newly added tag  is visible
  await expect(page.getByText("Playwright")).toBeVisible();
});
