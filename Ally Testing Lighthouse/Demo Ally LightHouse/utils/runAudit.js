import { playAudit } from "playwright-lighthouse";
import { fetchPageDetails } from "./common";

export async function runAudit(page) {
  const { currentURL, pageName } = await fetchPageDetails(page);
  console.log(
    "fetch details PAGE NAME ---->",
    pageName,
    "CURRENT URL",
    currentURL
  );

  const reportDirectory = `${process.cwd()}/lighthouse-report`;
  const reportFilename = `report_${pageName}_${new Date().getTime()}`;
  await page.goto(currentURL);
  const auditResults = await playAudit({
    url: currentURL,
    thresholds: {
      accessibility: 100,
    },
    port: 9223,
    ignoreError: true,
    reports: {
      formats: {
        json: false,
        html: true,
        csv: false,
      },
      directory: reportDirectory,
      name: reportFilename,
    },
  });
  console.log(auditResults.comparisonError, "\n");
}
