import { AddtoCartPage } from "./AddtoCartPage"
import{Page,Locator} from '@playwright/test'

export class LoginPageMain {
    page:Page
    username:Locator
    pasword:Locator
    loginButton:Locator
    constructor (page:Page){
        this.page=page
        this.username=page.locator('#user-name')
        this.pasword=page.locator('#password')
        this.loginButton=page.locator('#login-button')
    }

    async goto(){
        await this.page.goto("https://www.saucedemo.com/")
        return this
    }//One time declaration of url

    async login(user:string,pass:string):Promise<AddtoCartPage>{

        await this.username.fill(user)
        await this.pasword.fill(pass)
        await this.loginButton.click()
        return new AddtoCartPage(this.page) // going to product page
    }

}