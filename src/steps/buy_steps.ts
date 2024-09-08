import { Given, When, Then} from '@cucumber/cucumber';
import { expect } from 'playwright/test';

// Para esperar en la ejecución de los pasos
// await this.page.waitForTimeout(3000);

Given('the user visit page {string}', async function (URL:string) {

    await this.page.goto(URL);
})

When('the user can see the products', async function () {

    await expect(this.page.locator('[data-test="title"]')).toBeVisible();
  
})

Then('the user selects the product he likes', async function () {
 
    await this.page.locator('[data-test="item-4-title-link"]').click();
  
  })


When('the user see the detail of product', async function () {
   
    await this.page.goto("https://www.saucedemo.com/inventory-item.html?id=4");
    await expect(this.page.locator('[data-test="item-sauce-labs-backpack-img"]')).toBeVisible();
    await expect(this.page.locator('[data-test="inventory-item-name"]')).toBeVisible();
    await expect(this.page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
    await expect(this.page.locator('[data-test="inventory-item-price"]')).toBeVisible();

})

Then('the user click button {string}', async function (nameButton:string) {
 
    await this.page.locator('[data-test="add-to-cart"]').click();

})

Then('the user add the product to cart and the button change to {string}',async function (s: string){

    await expect(this.page.locator('[data-test="remove"]')).toBeVisible();

})

When('the user see the list of products', async function() {

    await expect(this.page.locator('[data-test="cart-list"]')).toBeVisible();
    
})

Then('the user can see the button {string} and {string}', async function(s: string, s2: string) {

    await expect(this.page.locator('[data-test="checkout"]')).toBeVisible();
    await expect(this.page.locator('[data-test="continue-shopping"]')).toBeVisible();
    await this.page.waitForTimeout(3000);

})

When('the user click button cart', async function() {
  
    await this.page.locator('[data-test="shopping-cart-link"]').click();

})
