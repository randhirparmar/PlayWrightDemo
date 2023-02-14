import { Page } from "@playwright/test";
import { login } from "./selector" ;

export default class loginPage{

    constructor(public page:Page){
        
    }
    async clearPageCookies(){
        await this.page.getByRole('button', { name: 'Accept All Cookies' }).click();
    }
    async enterEmailId(emailId:string){
        await this.page.locator('//*[@id="account-username-username"]').type(emailId)
    }
    async enterPassword(password:string){
        await this.page.locator('//*[@id="account-password-password"]').type(password)
    }
    async clickLoginButton(){
        await this.page.locator('//*[@data-test="account-submit"]').click();
    } 
    async userLogin(emailId:string,password:string){
        await this.page.locator(login.username).type(emailId)
        await this.page.locator(login.pwd).type(password)
        await this.page.locator(login.submit).click();
        await this.page.waitForURL('https://www.qa.tilburytech.net/uk/account')
   
    }
}