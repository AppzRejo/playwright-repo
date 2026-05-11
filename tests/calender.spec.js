import{test,expect} from '@playwright/test'

test("datepicker", async({page})=>{

   await page.goto("https://selenium.qabible.in/date-picker.php")
   const dateInput= page.locator('#single-input-field')
   await dateInput.click()

   
   const targetYear= 1997
   await expect(page.locator('.datepicker-dropdown')).toBeVisible()//wait for calender to show up
   
   const switchButton= page.locator('.datepicker-switch:visible')//to select switch button and to be visible :visible
   await switchButton.click()//to view month
   await switchButton.click()//to switch year

   let attempts=10 ///to avoid infinite loop

   while(attempts--){
   const decadetext=await switchButton.innerText()
   const startyear=parseInt(decadetext.split('-')[0].trim())
   if (targetYear>=startyear&&targetYear<=startyear+9) break
   await page.locator('.prev:visible').click() 
   }

   await page.locator('.year:visible').filter({hasText:'1997'}).click()
   await page.locator('.month:visible').filter({hasText:'May'}).click()
   await page.pause()
   await page.locator('.day:visible').filter({hasText:'17'}).click()
   await page.locator('#button-one').click()


})