import { test } from "@playwright/test";
import playwright from "playwright-core";

// import lighthouseDesktopConfig from "lighthouse/lighthouse-core/config/lr-desktop-config";

test("demo", async () => {
  const browser = await playwright["chromium"].launch({
    args: ["--remote-debugging-port=9223"],
  });
  // const page = await browser.newPage();
  // await page.goto(
  //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  // );

  // Import 'playAudit' with dynamic import
  const { playAudit } = await import("playwright-lighthouse");

  const reportDirectory = `${process.cwd()}/lighthouse-report`;
  const reportFilename = "reports-test";
  const auditResults = await playAudit({
    url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    //page: page,
    //config: lighthouseDesktopConfig,
    thresholds: {
      accessibility: 100,
    },
    port: 9223,
    ignoreError: true,
    //config: lighthouseDesktopConfig,
    //disableLogs: true,  //used while running in headless mode or CI/CD
    reports: {
      formats: {
        json: false,
        html: true,
        csv: false,
      },
      name: reportFilename,
      directory: reportDirectory,
    },
  });

  console.log("Accessibility Audit Results:", auditResults.comparisonError);
  // Iterate over the audits object
  // for (const auditId in auditResults.lhr.audits) {
  //   const audit = auditResults.lhr.audits[auditId];

  //   // Extract relevant information from each audit
  //   const auditTitle = audit.title;
  //   const auditDescription = audit.description;
  //   const auditScore = audit.score;
  //   const auditScoreDisplayMode = audit.scoreDisplayMode;

  //   // Do something with the extracted information
  //   console.log(`Audit Title: ${auditTitle}`);
  //   console.log(`Audit Description: ${auditDescription}`);
  //   console.log(`Audit Score: ${auditScore}`);
  //   console.log(`Audit Score Display Mode: ${auditScoreDisplayMode}`);
  //},
  //await page.close();
  await browser.close();
});
