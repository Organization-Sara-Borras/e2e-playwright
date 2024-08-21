import { Given, When, Then} from '@cucumber/cucumber';

When('I test playwright record', async function () {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.locator('[data-test="username"]').click();
    await this.page.locator('[data-test="username"]').fill('standard_user');
    await this.page.locator('[data-test="password"]').click();
    await this.page.locator('[data-test="password"]').fill('secret_sauce');
    await this.page.locator('[data-test="password"]').press('Enter');
  });
