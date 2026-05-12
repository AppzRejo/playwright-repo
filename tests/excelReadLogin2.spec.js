import {test,expect} from '@playwright/test'
import{getCellData} from '../utils/excelReader2.js'
import { LoginPage } from '../pages/LoginPage' 
   


test("POM Login page-user login with valid credentials", async({page})=>{
const username= getCellData(2,1)
const password=getCellData(2,2)

const loginpage = new LoginPage(page)
await loginpage.goto()
//await page.pause()
await loginpage.login(username,password)
    
})