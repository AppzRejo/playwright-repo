import{test ,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { AddtoCartPage } from '../pages/AddtoCartPage'  
import { CheckoutPage } from '../pages/CheckoutPage'

test("Complete checkout",async({page})=>{

    const login = new LoginPage(page)
    await login.goto()
    await login.login('standard_user', 'secret_sauce')
    await page.waitForURL("https://www.saucedemo.com/inventory.html")
    const cart = new AddtoCartPage(page)
    await cart.addtocart()
    await cart.gotocart()

    const checkout= new CheckoutPage(page)
    await checkout.gotocheckout()
    await checkout.fillcheckoutform('Appz','Doe','12345')
    await checkout.finishcheckout()
    expect(checkout.checkoutmessage()).toBeTruthy()
    await checkout.backhome()

})