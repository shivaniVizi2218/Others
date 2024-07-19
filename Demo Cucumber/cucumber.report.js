const reporter = require("cucumber-html-reporter");

(async () => {
  try {
    const options = {
      jsonFile: "playwright_reports/cucumber_report.json",
      launchReport: true,
      noInlineScreenshots: false,
      output: "playwright_reports/report.html",
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      screenshotsDirectory: "playwright_reports/screenshots/",
      storeScreenshots: true,
      theme: "bootstrap",
    };
    reporter.generate(options);
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();
