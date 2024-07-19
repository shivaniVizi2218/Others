import { test } from "@playwright/test";
import playwright from "playwright-core";
import { runAudit } from "../utils/runAudit";
import dotenv from "dotenv";
dotenv.config();
let browser, context, page;

test.beforeAll("SetUp", async () => {
  browser = await playwright["chromium"].launch({
    args: ["--remote-debugging-port=9223"],
  });
  context = await browser.newContext();
  page = await context.newPage();
});
test.afterAll("Teardown", async () => {
  await page.close();
  await context.close();
  await browser.close();
});
test("Lighthouse Accessibility Test", async () => {
  await page.goto(process.env.BASE_URL);
  await runAudit(page);
});
