import { Given, When, Then} from '@cucumber/cucumber';
import { expect } from 'playwright/test';

When('I test playwright record', async function () {
});
   
    

Given('the user is on sauceLabs login page', async function () {

    await this.page.goto(this.URL);
    await this.page.waitForTimeout(3000);
})

When('the user fill username with {string}', async function (username: string) {

    await this.page.locator('[data-test="username"]').fill(username);
   
})

When('the user fill password with {string}', async function (password: string) {
  
  await this.page.locator('[data-test="password"]').fill(password);
})

When('the user press login button', async function () {
 
  await this.page.locator('[data-test="login-button"]').click();

})

Then('the user should see products page', async function () {

  await this.page.waitForTimeout(3000);
  await expect(this.page.locator('[data-test="title"]')).toBeVisible();

})







