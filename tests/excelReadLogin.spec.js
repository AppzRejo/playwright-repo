import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage' 
import { getData} from '../utils/excelReader'

const credential=getData()

test("POM Login page-user login with valid credentials", async({page})=>{

for(const data of credential){
const loginpage = new LoginPage(page)
await loginpage.goto()
//await page.pause()
await loginpage.login(data.Username,data.Password)

    }
})