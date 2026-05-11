//official tewst runner of playright
import{test,expect} from "@playwright/test"

/*
test("Browser context playright test",async({browser})=> // test casewname- Browser context playright test
{
const context=await browser.newContext() // creating new browser context
const page=await context.newPage()// creating new page in browser context
await page.goto("https://selenium.qabible.in/")
})*/

test("Page playwright test", async({page})=> // test case name- Page playwright test 
{
await page.goto("https://selenium.qabible.in/")
const title = await page.title() // get the title of the page
console.log("Page title is:", title) // print the title of the page
await expect(page).toHaveTitle("Obsqura Testing") // verify the title of the page

})
