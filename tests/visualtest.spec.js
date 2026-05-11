import{test,expect} from '@playwright/test'

//Visual testing
test("visual testing in playwright", async({page})=>{
  await page.goto("https://www.saucedemo.com/ ")
  await page.waitForLoadState('networkidle')
  await expect(page).toHaveScreenshot ("saucedemoLoginpage.png" ,
    {threshold:0.2,//allowed diff is 20 %
      maxDiffPixels:7000}) //allowed pixel diff
  


}) 