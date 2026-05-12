import { Given,When,Then,Before,After,BeforeAll,AfterAll,BeforeStep,AfterStep,Status,setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "playwright";
import assert from "assert";

setDefaultTimeout(30000)
let browser
let context
let page

BeforeAll(async function () {
    //browser=await chromium.launch({headless:false ,slowMo:300})  
    browser=await chromium.launch({slowMo:300})
    
})

AfterAll(async function(){
    if (browser){
        await browser.close()
    }
})

Before( async function(){
    context=await browser.newContext()
    page= await context.newPage()
})
After(async function(scenario){
    try{
        if(scenario.result.status==Status.FAILED)
        {
            const screenshot=await page.screenshot()
            this.attach(screenshot,'image/png')
        }       
    }
    catch(error)
    {
        console.log('After hook error :',error.message)
    }
    finally{
        if (context){
            await context.close()
        }
    }

})

BeforeStep(async function(step){
    console.log(`${step.pickleStep.text}`)
})

AfterStep(async function(step){
     console.log(`${step.pickleStep.text}`)
})

Given('user is on application loginpage',async function(){

    await page.goto('https://www.saucedemo.com/' ,{waitUntil:'load', timeout:30000})    

})

When('user logs in with username {string} and pasword {string}', async function(username,password){

    await page.fill("#user-name",username)
    await page.fill("#password",password)   
    await page.click("#login-button")
})
Then('user should see  {string}',async function(result){
    if(result==='inventory page')
    {
        await page.waitForURL('**/inventory.html',{timeout:10000})
    }
    else if(result==='error message')
    {
        const error=await page.locator('[data-test="error"]').textContent()
   
  //  console.log("error",error)
    assert.ok(error.includes('Epic sadface'))

    }})

    Then('inventory item count should be {string}',async function(count){
        if (count==='0') return
        const items= await page.locator('.inventory_item').count()
        assert.strictEqual(items,Number(count))
        
    })
