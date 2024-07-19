const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");
const chai = require("chai");
const LoginPage = require("../pageobjects/login.page");
const HomePage = require("../pageobjects/home.page");
const Recipe_Item = require("../pageobjects/createRecipe.page");

Given(/^I am navigating home page of sidechef application$/, async () => {
  expect(await LoginPage.skipbtn).toBeExisting();
  await LoginPage.skiptologinpage();
});

When(/^I login with <username> and <password>$/, async () => {
  expect(await LoginPage.mailbtn).toBeDisplayed();
  expect(await LoginPage.passwordbtn).toBeDisplayed();
  await LoginPage.loginfunction(
    process.env.sidechef_username,
    process.env.sidechef_password
  );
});
Then(/^I can see landing page$/, async () => {
  await LoginPage.verifyingLandingPage();
});

When(/^I logout from application$/, async () => {
  await LoginPage.logoutfunction();
});

When(/^I click on the Got it button$/, async () => {
  await HomePage.closingPopup();
});

When(/^I click on the add to cart button$/, async () => {
  await HomePage.clicking_addCartSave_button();
});

When(/^I click on the cart logo$/, async () => {
  await HomePage.clicking_cart_Logo();
});

Then(/^I can redirect into cart page$/, async () => {
  await HomePage.verifyingCartPage();
});

When(/^I click on the three dots option$/, async () => {
  await HomePage.clicking_options_Dots();
});

Then(/^I can see more options text and popup$/, async () => {
  await HomePage.moreOption_popup();
});

When(/^I click on the clear list$/, async () => {
  await HomePage.clicking_clearList_button();
});

Then(/^I can see confirmation popup$/, async () => {
  await HomePage.conformation_popupMessage();
});

When(/^I click on yes option and back button$/, async () => {
  await HomePage.clicking_popYes_option();
  await HomePage.clicking_back_arrow();
});

Then(/^Ican see home page main text$/, async () => {
  await HomePage.verifying_homeNavigatingPage();
});

When(
  /^I click on save logo and I can redirect to saved list page$/,
  async () => {
    await HomePage.clicking_save_Logo();
  }
);

When(
  /^I click on the back button and I can navigate to home page$/,
  async () => {
    await HomePage.clicking_back_arrow();
  }
);

When(/^I click on search icon$/, async () => {
  await HomePage.clickingSearchIcon();
});

Then(/^I can see recipies$/, async () => {
  await HomePage.verifyingText();
});

When(/^I can select ingredients$/, async () => {
  await HomePage.selectingRecipies();
});

Then(/^I want to create a recipe by clicking add button$/, async () => {

  await Recipe_Item.addRecipe();
});


Then(/^I specify the required items to create recipe$/, async () => {

  await Recipe_Item.Recipe_description();
});

Then(/^I add the ingredents to it$/, async () => {

  await Recipe_Item.Recipe_Ingredients();
});

When(/^click on add ingredents button$/, async () => {
  await HomePage.pantrypage();
});

When(/^I login with invalid <username> and <password>$/, async () => {
  expect(await LoginPage.mailbtn).toBeDisplayed();
  expect(await LoginPage.passwordbtn).toBeDisplayed();
  await LoginPage.loginfunction(
    process.env.invalid_username,
    process.env.invalid_password
  );
});
