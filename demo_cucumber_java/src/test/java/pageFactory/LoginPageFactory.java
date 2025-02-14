package pageFactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPageFactory {
	WebDriver driver;

	@FindBy(id="user-name")
	WebElement input_username;
	@FindBy(id="password")
	WebElement input_password;
	@FindBy(id="login-button")
	WebElement btn_login;
	
	public void enterCredentials(String username, String password) {
		input_username.sendKeys(username);
		input_password.sendKeys(password);
	}
	
	public void clickLoginBtn() {
		btn_login.click();
	}
	
	public LoginPageFactory(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
}
