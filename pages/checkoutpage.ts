import { Page } from "@playwright/test";
import { selectProduct, navigateToBasket , checkout , deliveryAddress , deliveryMethod , paymentMethod , selectPaymentMethod , placeOrderAndPayButton , selectSamples, acceptCookie } from "./selector"

export default class CheckoutPage{

    constructor(public page:Page){
        
    }
    async clearCookies(){
        await this.page.locator(acceptCookie.button_acceptCookies).click();
    }
    
    async mouseHoverAndSelectProduct(){
        await this.page.locator(selectProduct.makeup).hover()
        await this.page.locator(selectProduct.eyeCream).click();
        await (await (this.page.waitForSelector('//button/span[contains(text(),"Not this time")]'))).click()
        await (await (this.page.waitForSelector("(//div[@class='CTALabel']/span)[1]"))).click()
        // await this.page.locator('//div[@class="withMiniBasket"]').first().click();
        // await this.page.locator('//*[@title="view bag & checkout"]').click()
    }

    async navigateToBasket()
    {
         await (await (this.page.waitForSelector('(//div[@class="withMiniBasket"])[1]'))).click()
        // await this.page.click('(//div[@class="withMiniBasket"])[1]')
        // await this.page.locator('//div[@class="withMiniBasket"]').first().click()
        // await this.page.locator('//*[@title="view bag & checkout"]').click()
    }
    async clickCheckoutButton()
    {
        await this.page.locator(checkout.checkoutButton).click()
    }

    async fillDeliveryAddress(emailAddress:string,firstName:string,lastName:string,address:string,telephone:string)
    {
        await this.page.locator('//span[contains(text(),"Add new address")]').first().click()
        // await this.page.locator(deliveryAddress.address_email).click()
        // await this.page.locator(deliveryAddress.address_email).type(emailAddress)
        await this.page.locator(deliveryAddress.address_fname).click()
        await this.page.locator(deliveryAddress.address_fname).type(firstName)
        await this.page.locator(deliveryAddress.address_lname).click()
        await this.page.locator(deliveryAddress.address_lname).type(lastName)
        // await this.page.locator('//*[@id="CHECKOUT_ADDRESS-lastName"]').click()
        // await this.page.locator('//*[@id="CHECKOUT_ADDRESS-lastName"]').type(lastName)
        await this.page.locator(deliveryAddress.address_telephone).click();
        await this.page.locator(deliveryAddress.address_telephone).type(telephone);
        await this.page.locator(deliveryAddress.address_finder).click();
        await this.page.locator(deliveryAddress.address_finder).type(address);
        await this.page.getByText('West Emlett').nth(1).click();
        await this.page.locator('//span[contains(text(),"Use this address")]').click()
    }
    async clickContinueToDelMethodButton()
    {
        await this.page.locator(deliveryMethod.continueToDelMethod).click()
    }
    async clickContinueToPaymentButton()
    {
        await this.page.locator(paymentMethod.continueToPayMethod).click()
    }
    async selectPaymentMethod(cardNo:string,expDate:string,cvc:string)
    {
        await this.page.getByTestId('checked-input-CARD').check();
        const frame= this.page.frameLocator(selectPaymentMethod.inputFrame);
        await frame.locator(selectPaymentMethod.cardNo).click();
        await frame.locator(selectPaymentMethod.cardNo).fill(cardNo);
        await frame.locator(selectPaymentMethod.expDate).click();
        await frame.locator(selectPaymentMethod.expDate).fill(expDate);
        await frame.locator(selectPaymentMethod.cvc).click();
        await frame.locator(selectPaymentMethod.cvc).fill(cvc);
    }
    async clickPlaceOrderAndPayButton()
    {
        await this.page.locator(placeOrderAndPayButton.submitOrder).click()
    }
    async clickChooseTwoFreeSamples()
    {
        await this.page.locator(selectSamples.button_choosesamples).click()
    }
    async selectSamplesAndProceed()
    {
        
        await this.page.locator(selectSamples.wonderglow).first().click();
        // await this.page.locator(selectSamples.wonderglow).last().click();
        await this.page.waitForSelector('(//button[@data-test="samples-checkout-cta"])[1]')
        await this.page.locator(selectSamples.button_samplecheckout).first().click();
    }

    
}