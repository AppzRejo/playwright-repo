import {test,expect} from '@playwright/test'
test("Multiple window", async({page, context})=>{
    await page.goto('https://demo.guru99.com/popup.php')

    //wait for page load 
    const popup  = context.waitForEvent('page')
    const clickme = page.locator("//a[text()='Click Here']")
    await clickme.click()
    //wait for 2nd page load
    const newpopup = await popup
    await newpopup.waitForLoadState()
    //accessing 2nd page elements
    const mail = newpopup.locator("//input[@name='emailid']")
    await mail.fill("aps@gamil.com")
  
    const button = newpopup.locator("//input[@name='btnLogin']")
    await button.click()
    
}

)