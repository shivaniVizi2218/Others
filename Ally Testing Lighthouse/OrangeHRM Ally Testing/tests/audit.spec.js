import { test } from "@playwright/test";
import playwright from "playwright-core";
//import data from "../test_data/url.json" assert { type: "json" };
import { runAudit } from "../utils/runAudit";
import * as sections from "../pages/pageIndex";
import dotenv from "dotenv";
dotenv.config();
//import { fetchPageDetails } from "../utils/common";
let browser, context, page;

test.beforeAll("SetUp", async () => {
  browser = await playwright["chromium"].launch({
    args: ["--remote-debugging-port=9223"],
  });
  context = await browser.newContext();
  page = await context.newPage();
  const loginPage = new sections.LoginPage(page, test);
  await loginPage.launchMainUrl();
});
test.afterAll("Teardown", async () => {
  await page.close();
  await context.close();
  await browser.close();
});
test("Lighthouse Accessibility Test", async () => {
  await runAudit(page);
  const loginPage = new sections.LoginPage(page, test);
  await loginPage.loginApplication(
    [process.env.BASE_USERNAME],
    [process.env.PASSWORD]
  );
  // await page.waitForNavigation();
  await runAudit(page);
});
