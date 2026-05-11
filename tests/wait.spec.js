import {test,expect} from '@playwright/test'
test("wait in playwright" , async({page})=>{
    await page.goto("https://groceryapp.uniqassosiates.com/admin/list-admin")
    await page.waitForLoadState('networkidle')
    const messageBox = page.locator('#c')
    messageBox.fill("Test Data")
})