const { $, driver, browser } = require("@wdio/globals");

const { assert, expect } = require("chai");

class LoginPage {
  locators = {
    android: {
      skip: "(//android.widget.TextView[text(),'SKIP'])[3]",
      login:
        "//android.widget.TextView[@text='Already have an account? Log In']",
      mail: "(//android.widget.EditText)[1]",
      pwd: "(//android.widget.EditText)[2]",
      strtcooking: "(//android.widget.TextView[text(),'START COOKING!'])[6]",
      loginSkip: "//android.widget.TextView[@text='SKIP']",
      gotit:
        "(//android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView)[2]",
      homePageTitle:
        '//android.widget.TextView[@content-desc="Daily Inspiration"]',
      profile: "(//android.widget.ImageView)[1]",
      logout: "//android.widget.TextView[@text='Log Out']",
      yesforlogout: "//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]",
      homeLogo:
        '//android.widget.Button[@content-desc="For You"]/android.view.ViewGroup/android.view.ViewGroup',
      searchLogo:
        '//android.widget.Button[@content-desc="Search"]/android.view.ViewGroup/android.view.ViewGroup',
      addLogo:
        '//android.widget.Button[@content-desc="Add"]/android.view.ViewGroup/android.view.ViewGroup',
      planLogo:
        '//android.widget.Button[@content-desc="Meal Plan"]/android.view.ViewGroup/android.view.ViewGroup',
      pantryLogo:
        '//android.widget.Button[@content-desc="My Pantry"]/android.view.ViewGroup/android.view.ViewGroup',
    },
  };

  platform() {
    return driver.isAndroid ? "android" : "ios";
  }

  get skipbtn() {
    return $(this.locators[this.platform()].skip);
  }
  get loginbtn() {
    return $(this.locators[this.platform()].login);
  }
  get mailbtn() {
    return $(this.locators[this.platform()].mail);
  }
  get passwordbtn() {
    return $(this.locators[this.platform()].pwd);
  }
  get startcookingbtn() {
    return $(this.locators[this.platform()].strtcooking);
  }
  get gotitbtn() {
    return $(this.locators[this.platform()].gotit);
  }
  get homePageTitle() {
    return $(this.locators[this.platform()].homePageTitle);
  }
  get profilebtn() {
    return $(this.locators[this.platform()].profile);
  }
  get logoutfn() {
    return $(this.locators[this.platform()].logout);
  }
  get yesbtnforlogout() {
    return $(this.locators[this.platform()].yesforlogout);
  }
  get search_Logo() {
    return $(this.locators[this.platform()].searchLogo);
  }
  get add_Logo() {
    return $(this.locators[this.platform()].addLogo);
  }
  get plan_Logo() {
    return $(this.locators[this.platform()].planLogo);
  }
  get pantry_Logo() {
    return $(this.locators[this.platform()].pantryLogo);
  }
  get login_Skip() {
    return $(this.locators[this.platform()].loginSkip);
  }

  async skiptologinpage() {
    await browser.pause(process.env.small_wait);
    (await this.skipbtn).click();
    (await this.loginbtn).click();
    await browser.pause(5000);
  }

  async loginfunction(username, password) {
    await this.mailbtn.waitForDisplayed();
    expect(await this.mailbtn.isDisplayed()).to.be.true;
    await this.mailbtn.setValue(username);
    await browser.pause(5000);
    await browser.keys(["Tab"]);
    expect(await this.passwordbtn.isDisplayed()).to.be.true;
    await this.passwordbtn.setValue(password);
    await browser.pause(process.env.small_wait);
    expect(await this.startcookingbtn.isDisplayed()).to.be.true;
    await this.startcookingbtn.click();
    await browser.pause(process.env.small_wait);
    await this.login_Skip.click();
    await browser.pause(process.env.small_wait);
    await this.gotitbtn.waitForDisplayed();
    expect(await this.gotitbtn.isDisplayed()).to.be.true;
    await this.gotitbtn.click();
  }
  async verifyingLandingPage() {
    expect(await this.search_Logo.isDisplayed()).to.be.true;
    expect(await this.add_Logo.isDisplayed()).to.be.true;
    expect(await this.plan_Logo.isDisplayed()).to.be.true;
    expect(await this.pantry_Logo.isDisplayed()).to.be.true;
  }
  async logoutfunction() {
    (await this.profilebtn).waitForDisplayed();
    expect(await this.profilebtn.isDisplayed()).to.be.true;
    (await this.profilebtn).click();

    await this.logoutfn.waitForDisplayed();
    expect(await this.logoutfn.isDisplayed()).to.be.true;
    (await this.logoutfn).click();

    await browser.pause(process.env.small_wait);
    expect(await this.yesbtnforlogout.isDisplayed()).to.be.true;
    await this.yesbtnforlogout.click();
  }
}

module.exports = new LoginPage();
