import {test,expect} from '@playwright/test'
test("Alert in playwright", async({page})=>{
    await page.goto("https://selenium.qabible.in/javascript-alert.php")

    //create a listener-It listens for an alert manage

    page.on('dialog',async dialog =>{

        expect(dialog.message()) .toBe('I am a Javascript alert box!')
        await dialog.accept()

    })

    const clickme= page.locator("//button[@class='btn btn-success']")
    await clickme.click()
})