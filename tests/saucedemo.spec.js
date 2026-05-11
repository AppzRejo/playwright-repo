import  {test,expect} from '@playwright/test'

//Hooks
test.beforeEach(async({page})=>{
await page.goto("https://www.saucedemo.com")
})


test("@smoke Login using valid credentials",async({page})=>{

  
    const username = page.locator("//input[@name='user-name']")
    await username.fill("standard_user")
    const password = page.locator("//input[@name='password']")
    await password.fill("secret_sauce")
    const login = page.locator("//input[@name='login-button']")
    await login.click()
    
    await expect(page.locator("//span[@data-test='title']")).toHaveText('Products')
}) 

test ("@smoke Login using invalid credentials",async({page})=>{

    const username = page.locator("//input[@name='user-name']")
    await username.fill("user")
    const password = page.locator("//input[@name='password']")
    await password.fill("pass")
    const login = page.locator("//input[@name='login-button']")
    await login.click()

    await expect(page.locator("//h3 [@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')

})

test ("Login using invalid username",async({page})=>{

    const username = page.locator("//input[@name='user-name']")
    await username.fill("user")
    const password = page.locator("//input[@name='password']")
    await password.fill("secret_sauce")
    const login = page.locator("//input[@name='login-button']")
    await login.click()

    await expect(page.locator("//h3 [@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')

})
test ("Login using invalid pasword",async({page})=>{

    const username = page.locator("//input[@name='user-name']")
    await username.fill("standard_user")
    const password = page.locator("//input[@name='password']")
    await password.fill("pass")
    const login = page.locator("//input[@name='login-button']")
    await login.click()

    await expect(page.locator("//h3 [@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')

})