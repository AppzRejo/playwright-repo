import{test,expect} from "@playwright/test"
test("locators", async({page})=>{
    await page.goto ("https://selenium.qabible.in/simple-form-demo.php")
    const messageBox = page.locator('#single-input-field')
    await messageBox.type("Hello world")
    page.locator('.form-control')
    const button = page.locator("//button[@id='button-one']")
    await messageBox.type("Hello world")
   await messageBox.fill("Welcome")
   await button.click()
})  

test("specialloactors in playwright",async({page})=>{
    await page.goto ("https://groceryapp.uniqassosiates.com/admin/login")
    const username= page.locator("//input[@name='username']")
    await username.fill ("admin")
    const password = page.locator("//input[@name='password']")
    await password.fill("admin")
    const signIn= page.locator("//button[ @type='submit']")
    await signIn.click()

    //getByRoll
    await page.goto("https://groceryapp.uniqassosiates.com/admin/list-admin")
    //await page.getByRole('button',{name:'Active'}).nth(0).click()
    await page.getByText('Active').first.click
    await page.getByText('Active').last().click()
})
/*test("specialloactors in playwright",async({page})=>{
    await page.goto ("https://groceryapp.uniqassosiates.com/admin/login")
    const username= page.locator("//input[@name='username']")
    await username.fill ("admin")
    const password = page.locator("//input[@name='password']")
    await password.fill("admin")
    const signIn= page.locator("//button[ @type='submit']")
    await signIn.click()

    //getByRoll
    await page.goto("https://groceryapp.uniqassosiates.com/admin/list-admin")
    //await page.getByRole('button',{name:'Active'}).nth(0).click()
    await page.getByText('Active').first.click
    await page.getByText('Active').last().click()
})*/