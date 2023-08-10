import {Given,When,Then} from '@wdio/cucumber-framework';
import BasePage from '../pageobjects/page.js';
import data from "../pages/login.json" assert { type: "json" }


const basepage = new BasePage();



Given(/^I am on the (.*) page$/, (page) => {
    basepage.open(page)
    console.log("danish",data.name)
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {

});

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     //await expect(SecurePage.flashAlert).toBeExisting();
//     //await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

