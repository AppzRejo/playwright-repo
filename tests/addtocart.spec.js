import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { AddtoCartPage } from '../pages/AddtoCartPage'

/*Hooks
test.beforeEach(async({page})=>{
await page.goto("https://www.saucedemo.com")
})*/

test("Login to saucedemo and add an item in cart", async ({ page }) => {
    const login = new LoginPage(page)
    await login.goto()
    await login.login('standard_user', 'secret_sauce')
    
    const cart = new AddtoCartPage(page)
    await cart.addtocart()
    await cart.gotocart()
    expect(cart.checkcart()).toBeTruthy()

})