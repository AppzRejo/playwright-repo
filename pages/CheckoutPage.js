import { expect } from "@playwright/test"
export class CheckoutPage {
    constructor(page) {
        this.page = page
        this.checkout = page.locator("//button[@id='checkout']")
        this.firstName = page.locator("#first-name")
        this.lastName = page.locator("#last-name")
        this.postalCode = page.locator("#postal-code")
        this.continueButton = page.locator("//input[@id='continue']")
        this.finish = page.locator('#finish')
        this.message=page.locator("//h2[@class='complete-header']")        
        this.home = page.locator("//button[@name='back-to-products']")

    }

    async gotocheckout(){
        await this.checkout.click()
    }
    async fillcheckoutform(fname,lname,postcode){
        await this.firstName.fill(fname)
        await this.lastName.fill(lname)
        await this.page.pause()
        await this.postalCode.fill(postcode)
       
    }
    async finishcheckout(){
         await this.continueButton.click()
         await this.finish.click()
    }

    async checkoutmessage()
    {
        await expect(this.message).toHaveText('Thank you for your order!')

    }
    async backhome(){
        this.home.click()
    }

}