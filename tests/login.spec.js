import  {test,expect} from '@playwright/test'
import { getData } from '../utils/excelReader.js'

//Hooks
test.beforeEach(async({page})=>{
await page.goto("https://www.saucedemo.com")
})

/*const validLoginCred= require('../utils/testDataCredentials.json') //import json filr from another folder

test("Login using valid credentials",async({page})=>{

    const usernameValue= validLoginCred.username
    const paswordValue= validLoginCred.password
    const username = page.locator("//input[@name='user-name']")
    await username.fill(usernameValue)
    const password = page.locator("//input[@name='password']")
    await password.fill(paswordValue)
    const login = page.locator("//input[@name='login-button']")
    await login.click()
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    //await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator("//span[@data-test='title']")).toHaveText('Products')
}) */

test ("Login using invalid credentials",async({page})=>{

    const username = page.locator("//input[@name='user-name']")
    await username.fill("user")
    const password = page.locator("//input[@name='password']")
    await password.fill("pass")
    const login = page.locator("//input[@name='login-button']")
    await login.click()

    await expect(page.locator("//h3 [@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')

})


test("Login using valid credentials",async({page})=>{

    const usernameValue= validLoginCred.username
    const paswordValue= validLoginCred.password
    const username = page.locator("//input[@name='user-name']")
    await username.fill(usernameValue)
    const password = page.locator("//input[@name='password']")
    await password.fill(paswordValue)
    const login = page.locator("//input[@name='login-button']")
    await login.click()
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    //await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator("//span[@data-test='title']")).toHaveText('Products')
}) 