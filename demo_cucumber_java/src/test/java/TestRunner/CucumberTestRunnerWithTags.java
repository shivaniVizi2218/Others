package TestRunner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(tags = "@Smoke and @Regression and not @Perf", features = { "src/test/resources/FeatureWithTags" }, glue = {
		"StepDefinitions" }, plugin = { "pretty", "html:target/htmlReport.html" })

public class CucumberTestRunnerWithTags extends AbstractTestNGCucumberTests {

}
