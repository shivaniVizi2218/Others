import { executeStep } from "../utils/actions";
import dotenv from "dotenv";
dotenv.config();

export class LoginPage {
  constructor(page, test) {
    this.page = page;
    this.test = test;
    this.inputUsername = page.locator("//input[@name='username']");
    this.inputPassword = page.locator("//input[@name='password']");
    this.btnLogin = page.locator("//button");
  }
  async launchMainUrl() {
    await executeStep(
      this.test,
      this.page,
      "navigate",
      "Navigating to OrangeHRM main page",
      [process.env.LOGIN_URL]
    );
  }
  async loginApplication(username, password) {
    await executeStep(
      this.test,
      this.inputUsername,
      "fill",
      "Entered valid username",
      username
    );
    await executeStep(
      this.test,
      this.inputPassword,
      "fill",
      "Entered correct password",
      password
    );
    await executeStep(
      this.test,
      this.btnLogin,
      "click",
      "Clicking login button"
    );
  }
}
