import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage' 
import { getData } from '../utils/excelReader'

const credential= getData()

test("POM Login page-user login with valid credentials", async({page})=>{

    for(const data of credential){
const loginpage = new LoginPage(page)
const inventoryPage=await (await loginpage.goto()).login(data.Username, data.Password)
    }
await expect(page.locator("//span[@data-test='title']")).toHaveText('Products')
})

test("POM Login page-user login with invalid credentials", async({page})=>{

const loginpage = new LoginPage(page)
await loginpage.goto()
await loginpage.login('user','secret')
await expect(page.locator("//h3 [@data-test='error']")).toContainText('Epic sadface: Username and password do not match any user in this service')


})