import { Given, When, Then } from "@cucumber/cucumber"
import { chromium,expect } from "@playwright/test"
import assert from 'assert'



let browser
let page

Given('user is on application login page', async function () {//anonymous function-noname 
    browser = await chromium.launch({ headless: false })
    const context = await browser.newContext()
    page = await context.newPage()
    await page.goto("https://www.saucedemo.com/", { timeout: 3000 })

})

When('user enters  username and password', async function () {
    await page.fill("#user-name", "standard_user")
    await page.fill("#password", "secret_sauce")
    await page.click("#login-button")
})

When('user add product to cart and click on checkout', async function () {
    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await page.locator("//a[@class='shopping_cart_link']").click()
    await page.locator("//button[@id='checkout']").click()


})
When('fill the data for checkout and click continue', async function () {
    await page.locator("#first-name").fill('Appz')
    await page.locator("#last-name").fill('Doe')
    await page.waitForLoadState('networkidle')
    await page.pause()
    await page.locator("#postal-code").fill('12345')
    await page.locator("//input[@id='continue']").click()
})
When('click on finish button', async function () {
   await page.locator('#finish').click() 
    
})

Then('user should see the confirmation messsage', async function () {
await expect(page.locator("//h2[@class='complete-header']")).toHaveText('Thank you for your order!')
      
})










