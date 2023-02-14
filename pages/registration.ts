import { Page ,chromium, BrowserContext } from "@playwright/test";
import { registration } from "./selector" ;

export default class RegisterPage{

    constructor(public page:Page){
        
    }
    async clearPageCookies(){
        await this.page.getByRole('button', { name: 'Accept All Cookies' }).click();
    }
    async userRegistration(firstName:string,lastName:string,emailId:string,password:string){
        await this.page.locator(registration.fname).click();
        await this.page.locator(registration.fname).type(firstName)
        await this.page.locator(registration.lname).click()
        await this.page.locator(registration.lname).type(lastName)
        await this.page.locator(registration.email).click()
        await this.page.locator(registration.email).type(emailId)
        await this.page.locator(registration.pwd).click()
        await this.page.locator(registration.pwd).type(password)
        await this.page.locator(registration.createAccount).click()
        await this.page.waitForLoadState('networkidle');

    }

}