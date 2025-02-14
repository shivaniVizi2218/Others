//package StepDefinitions;
//
//
//
//import java.time.Duration;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.testng.Assert;
//
//import io.cucumber.java.en.And;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
//
//public class LoginSteps {
//	static WebDriver driver;
//	@Given("User is on login page")
//	public void user_is_on_login_page() {
//	    driver = new ChromeDriver();
//	    driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
//	    driver.manage().window().maximize();
//	    driver.get("https://www.saucedemo.com/");
//	}
//
////	@When("User enters valid username and password")
////	public void user_enters_valid_username_and_password() {
////		driver.findElement(By.id("user-name")).sendKeys("standard_user");;
////		driver.findElement(By.id("password")).sendKeys("secret_sauce");;
////	}
//	
//	@When("User enters {string} and {string}")
//	public void user_enters_and(String username, String password) {
//		driver.findElement(By.id("user-name")).sendKeys(username);;
//		driver.findElement(By.id("password")).sendKeys(password);;
//	}
//
//	@And("Clicks on login button")
//	public void clicks_on_login_button() {
//	    driver.findElement(By.id("login-button")).click();
//	}
//
//	@Then("User should be navigated to home page")
//	public void user_should_be_navigated_to_home_page() {
//	    Assert.assertTrue(driver.findElements(By.xpath("//div[@class='app_logo']")).size()>0,"User naviagted to Home page");
//	}
//
//	@And("Close the browser")
//	public void close_the_browser() {
//	    driver.close();
//	}
//}
