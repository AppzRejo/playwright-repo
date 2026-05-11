import {test,expecte} from '@playwright/test'
test('Mousehover in playwright' ,async({page})=>{

    page.goto("https://selenium.qabible.in")
    const othermenu= page.locator('#others')
    othermenu.hover()
})