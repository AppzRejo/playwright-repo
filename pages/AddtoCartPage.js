import { expect } from "@playwright/test"

export class AddtoCartPage{

    constructor(page){
        this.page=page
        this.item=page.locator('#add-to-cart-sauce-labs-bike-light')
        this.cart=page.locator("//a[@class='shopping_cart_link']")  
        this.cartList=page.locator('#item_0_title_link') 
    
    }

    async addtocart(){ 
        await this.item.click({force: true})
        return this
     }

     async gotocart(){
        await this.cart.click()   
        return this    
    }
    async checkcart()
    {
        await expect(this.cartList).toContainText("Sauce Labs Bike Light") 
    }



}