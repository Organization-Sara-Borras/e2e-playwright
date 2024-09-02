import { Given, When, Then} from '@cucumber/cucumber';
import { expect } from 'playwright/test';

When('I test playwright record', async function () {
});
   
    

Given('the user visit page "https://www.saucedemo.com/" and the user logs in', async function () {

    await page.locator('[data-test="item-4-title-link"]').click();
   
})