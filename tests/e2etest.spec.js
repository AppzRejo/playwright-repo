import{test,expect} from '@playwright/test'
test('E2E testing',async({page})=>{

  await page.goto("https://www.saucedemo.com")
  const username = page.locator("//input[@name='user-name']")
    await username.fill("standard_user")
    const password = page.locator("//input[@name='password']")
    await password.fill("secret_sauce")
    const login = page.locator("//input[@name='login-button']")
    await login.click()


    const addtocart =page.locator('#add-to-cart-sauce-labs-backpack')
    
    
    await addtocart.click()

    const gotoCart = page.locator("//a[@class='shopping_cart_link']")
    await gotoCart.click()

    

    const checkout = page.locator("//button[@id='checkout']")
    await checkout.click()

     

    const firstName =page.locator("#first-name")    
    await firstName.fill('Appz')
    const lastName =page.locator("#last-name")
    await lastName.fill('Doe') 
    

     

    const postalCode =page.locator("#postal-code")    
    
     //console.log(await postalCode.isEditable())

    
await page.waitForLoadState('networkidle')
await page.pause()
   await postalCode.fill('12345')
   
   console.log("postal code filled successfully")

   const continueButton=page.locator("//input[@id='continue']")    
    await continueButton.click()

    const finish=page.locator('#finish')
    await finish.click()

    await expect(page.locator("//h2[@class='complete-header']")).toHaveText('Thank you for your order!')
    
    const home=page.locator("//button[@name='back-to-products']")
    await home.click()
    

})