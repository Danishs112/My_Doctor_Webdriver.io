import {Given,When,Then} from '@wdio/cucumber-framework';
import BasePage from '../pageobjects/page.js';
import GenericHelper from '../helpers/genericHelpers.js';
import WebTextBox from '../helpers/webTextBox.js';
import WebButton from '../helpers/webButton.js';
import WebElement from '../helpers/webElement.js';
import WebXpath from '../helpers/webXpath.js';


const basepage = new BasePage();
const genericHelpers = new GenericHelper();
const webTextBox = new WebTextBox();
const webButton = new WebButton();
const webElement = new WebElement();
const webXpath = new WebXpath();

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
    // await browser.pause(2000)
});

Then(/^user should navigate to homepage with (.*) access$/,async(avatar) =>  {
    let locator = genericHelpers.getLocatarFromJsonFile(avatar);
    webElement.elementIsDisplayed(locator)
    // await expect($("header div.MuiAvatar-circular")).toBeExisting()
    // await browser.url("http://my-doctors.net/")    
});



Then(/^user should see the message (.*)$/, async(text) => {
    webXpath.isDisplayed(text);
});

When(/^user clicks on the (.*) link$/, async(text) => {
    webXpath.clickByXpath(text);
    await browser.pause(3000)
})

Then(/^user should navigate to (.*) page$/, async(text) => {
   let visitedPageUrl =  await basepage.getVisitedPageUrl(text);
   expect(browser).toHaveTitleContaining(visitedPageUrl)
})