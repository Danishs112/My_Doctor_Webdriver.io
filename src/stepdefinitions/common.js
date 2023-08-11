import {Given,When,Then} from '@wdio/cucumber-framework';
import BasePage from '../pageobjects/page.js';
import GenericHelper from '../helpers/genericHelpers.js';
import WebTextBox from '../helpers/webTextBox.js';
import WebButton from '../helpers/webButton.js';
import WebElement from '../helpers/webElement.js';

const basepage = new BasePage();
const genericHelpers = new GenericHelper();
const webTextBox = new WebTextBox();
const webButton = new WebButton();
const webElement = new WebElement();

Given(/^user is on (.*) page$/, (page) => {
    basepage.open(page);
});

When(/^user enters the user (.*) in the (.*) field$/, async (email,inputField) => {
  let encodedCredentials = basepage.getCredentials(email);
  let decodeCredentials  = genericHelpers.decode(encodedCredentials);
  let locator = genericHelpers.getLocatarFromJsonFile(inputField);
  webTextBox.setText(locator,decodeCredentials);
});

When(/^user clicks (.*) button$/, async(button) => {
    let locator = genericHelpers.getLocatarFromJsonFile(button);
    webButton.click(locator);
    await browser.pause(2000)
});

Then(/^user should navigate to homepage with (.*) access$/,async(avatar) =>  {
    let locator = genericHelpers.getLocatarFromJsonFile(avatar);
    webElement.elementIsDisplayed(locator)
    // await expect($("header div.MuiAvatar-circular")).toBeExisting()
    await browser.pause(3000)
    await browser.url("http://my-doctors.net/")    
});

When(/^user clicks on logout tab$/, async() => {
   await $("header div.MuiAvatar-circular").click();
   await $('ul[role="menu"] li:nth-child(3)').click();
});
