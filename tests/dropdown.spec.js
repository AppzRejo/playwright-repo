import {test,expect} from '@playwright/test'
test("wait in playwright" , async({page})=>{
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    const drop =page.locator('#dropdowm-menu-1')

    //select by index
    //await drop.selectOption({index:1})

    //select by value 
   // await drop.selectOption({value:'python'})

   //Selct using text
   await drop.selectOption({label:'SQL'})

})

test("handling check boxs",async({page})=>{

     await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    const checkbox1 =page.locator("//input[@value='option-1']")
    await checkbox1.check()
    console.log(await checkbox1.isChecked())
})
test("handling radio button",async({page})=>{

     await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    const radio =page.locator("//input[@value='green']")
    await radio.click()
    
})


