package pageFactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePageFactory {
	WebDriver driver;
	
	@FindBy(xpath="//a[@class='shopping_cart_link']")
	WebElement icon_cart;
	
	public void isCartDisplayed() {
		icon_cart.isDisplayed();
	}
	
	public HomePageFactory(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		
	}
}
