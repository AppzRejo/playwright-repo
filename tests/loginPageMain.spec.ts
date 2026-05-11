import {test,expect} from '@playwright/test'
import { LoginPageMain } from '../pages/loginPageMain'
import testdata from '../utils/testDataCredentials.json'

test("Login using typescript" ,async({page})=>{

   const user= testdata.username
   const pass=testdata.password
    const loginPage=new LoginPageMain(page)
    await loginPage.goto()
    await loginPage.login(user,pass)

})