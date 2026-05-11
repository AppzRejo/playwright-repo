import { AddtoCartPage } from "./AddtoCartPage"

export class LoginPage {
    constructor (page){
        this.page=page
        this.username=page.locator('#user-name')
        this.pasword=page.locator('#password')
        this.loginButton=page.locator('#login-button')
    }

    async goto(){
        await this.page.goto("https://www.saucedemo.com/")
        return this
    }//One time declaration of url

    async login(user,pass){

        await this.username.fill(user)
        await this.pasword.fill(pass)
        await this.loginButton.click()
        return new AddtoCartPage(this.page) // going to product page
    }

}