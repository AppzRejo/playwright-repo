import  {test,expect} from '@playwright/test'

//Hooks
test.beforeEach(async({page})=>{
await page.goto("https://www.saucedemo.com")
})

const testdata= require('../utils/parametrizedtestdata.json')


for (const data of testdata){

//Parameterized data driven testing
test (`Login using invalid credentials ${data.username} ${data.password}`, async({page})=>{
   

    const username = page.locator("//input[@name='user-name']")
    await username.fill(data.username)
    const password = page.locator("//input[@name='password']")
    await password.fill(data.password)
    const login = page.locator("//input[@name='login-button']")
    await login.click()
    await expect(page.locator("//h3 [@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')

})
}