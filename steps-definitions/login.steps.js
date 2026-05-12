import { Given,When,Then } from "@cucumber/cucumber"
import { chromium,expect } from "@playwright/test"
import assert from 'assert'




let browser
let page

Given ('user is on loginpage',async function () {//anonymous function-noname 
    //browser=await chromium.launch({headless:false})
    browser=await chromium.launch()
 const context =await browser.newContext()
  page= await context.newPage()
 await page.goto("https://www.saucedemo.com/",{timeout:3000})

 })

 When('user enters valid username and password',async function () {   
    await page.fill("#user-name","standard_user")
    await page.fill("#password","secret_sauce")   
    await page.click("#login-button")    
 })

 When('user enters Invalid username {string} and password {string}',async function (username,password) {
   
    await page.fill("#user-name",username)

    await page.fill("#password",password)
   
    await page.click("#login-button")
    
 })

 Then('user should see inventorypage',async function () {
    await page.waitForSelector('.inventory_list')
    const title= await page.title()
    assert.ok(title.includes("Swag Labs")) 
      await browser.close()
    
 })

 Then('user should see error message',async function () {
  const error = await page.locator('[data-test="error"]').textContent()
 assert.ok(error.includes("Epic sadface: Username and password do not match any user in this service"))
     await browser.close()
        
 })


