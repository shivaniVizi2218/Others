package StepDefinitions;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageFactory.HomePageFactory;
import pageFactory.LoginPageFactory;

public class PageFactoryLoginSteps {
	static WebDriver driver;
	LoginPageFactory login;
	HomePageFactory home;
	
	@Given("User is on login page")
	public void user_is_on_login_page() {
	    driver = new ChromeDriver();
	    driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
	    driver.manage().window().maximize();
	    driver.get("https://www.saucedemo.com/");
	}
	
	@When("User enters {string} and {string}")
	public void user_enters_and(String username, String password) {
		login = new LoginPageFactory(driver);
		login.enterCredentials(username, password);
	}

	@And("Clicks on login button")
	public void clicks_on_login_button() {
	    login.clickLoginBtn();
	}

	@Then("User should be navigated to home page")
	public void user_should_be_navigated_to_home_page() {
		home = new HomePageFactory(driver);
		home.isCartDisplayed();
	}

	@And("Close the browser")
	public void close_the_browser() {
	    driver.close();
	}

}
