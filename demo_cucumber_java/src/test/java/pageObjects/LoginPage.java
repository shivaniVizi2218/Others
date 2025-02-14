package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage {
	WebDriver driver;
	By input_username = By.id("user-name");
	By input_password = By.id("password");
	By btn_login = By.id("login-button");
	By lbl_logo = By.xpath("//div[@class='app_logo']");
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}
	
	public void enterCredentials(String username, String password) {
		driver.findElement(input_username).sendKeys(username);
		driver.findElement(input_password).sendKeys(password);
	}
	
	public void clickLoginBtn() {
		driver.findElement(btn_login).click();
	}
	
	public void isLogoDisplayed() {
		driver.findElement(lbl_logo).isDisplayed();
	}
}
