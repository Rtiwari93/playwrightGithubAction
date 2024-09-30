const { test, expect } = require("@playwright/test")


test('Valid login test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Fill in username and password
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')

    // Click the login button and await the action

    page.getByRole("button", { name: 'Login' }).click();


    // Assertion to check the URL
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html')

    // Assertion to check if the logo contains the correct text

    await expect(page.locator("//div[@class='app_logo']")).toContainText("Swag Labs");


})






