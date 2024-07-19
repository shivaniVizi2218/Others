const { NVDAKeyCodeCommands } = require("@guidepup/guidepup");
const { nvdaTest: test } = require("@guidepup/playwright");
//const { test } = require("@playwright/test");

test("Demo", async ({ page, nvda }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.waitForTimeout(5000);
  //await nvda.interact();
  //await nvda.navigateToWebContent();
  await nvda.perform(nvda.keyboardCommands.exitFocusMode);
  await nvda.next();
  await nvda.perform(NVDAKeyCodeCommands.readActiveWindow);
  const phrase = JSON.stringify(await nvda.spokenPhraseLog());
  console.log("phrase --->", phrase);
});
