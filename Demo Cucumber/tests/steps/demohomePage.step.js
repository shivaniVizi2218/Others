const { Given, When, Then } = require("@cucumber/cucumber");
const HomePage = require("../../pages/demohomePage");
const { expect } = require("@playwright/test");
const homePage = HomePage;

Given(/^I am on the website main Page$/, async () => {
  await homePage.launchWebsite();
});

When(/^I click on Shop menu$/, async () => {
  await homePage.navigateToShop();
});

When(/^I click on Home$/, async () => {
  await homePage.navigateToHome();
});

Then(/^I should see three arrivals only$/, async () => {
  await homePage.verifyArrivalsCount();
});

Then(/^I click on an image$/, async () => {
  await homePage.clickingImage();
});

Then(/^it should navigate to the next Page$/, async () => {
  await homePage.verifyPageNavigation();
});

Then(/^I should be able to add it to basket$/, async () => {
  await homePage.addItem();
  expect(await homePage.msgAddedToBasket).toBeVisible();
});
