import {test,expect} from '@playwright/test'

test('Dynamic visual testing' ,async({page})=>{
 await page.goto("https://selenium.qabible.in")
 await page.waitForLoadState('networkidle')
 await page.locator(".carousel.slide").evaluate((element)=>{
    element.style.display='none' }) //hiding the carousel 
await expect(page).toHaveScreenshot('obsquara.png', {threshold:0.02,maxDiffPixels:2500})
 }
)