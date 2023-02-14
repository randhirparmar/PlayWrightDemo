import { test, expect } from "../base/pomfixture";
import * as data from "../testData/testData.json" ;
import {testEmailAddress} from "../pages/generateEmailAddress"
import MailosaurClient from 'mailosaur';
import { basket } from "../pages/selector";
const mailosaur = new MailosaurClient('VTR9uWzKiWMfT2o5');

const testEmail=testEmailAddress(); 
const pwd = "Ran@2022"

test.describe(' checkout scenario for registered user ', () => {
  test('User Registration', async ({ page , baseURL, registerPage, checkoutPage}) => {
    await page.goto(`${baseURL}/account/register`);
    await checkoutPage.clearCookies()
    await registerPage.userRegistration(data.fName ,data.lName,testEmail,pwd)
    expect(page.url()).toContain('account')

  });
  test('User login', async ({ page , baseURL, LoginPage, checkoutPage}) => {
    await page.goto(`${baseURL}/account/login`)
    await checkoutPage.clearCookies()
    await LoginPage.userLogin(testEmail,pwd)
    expect(page.url()).toContain('account')
    await checkoutPage.mouseHoverAndSelectProduct();
    await checkoutPage.navigateToBasket()
    expect(basket.item).toBeTruthy()
    await checkoutPage.clickChooseTwoFreeSamples();
    await checkoutPage.selectSamplesAndProceed();
    await page.waitForEvent('load')
    const noOfItems = await page.locator(basket.bag).count()
    expect(noOfItems).toBe(2)
    await checkoutPage.fillDeliveryAddress(testEmail,data.fName,data.lName,data.address,data.tel);
    await checkoutPage.selectPaymentMethod(data.cardNo,data.expDate,data.cvc);
    await checkoutPage.clickPlaceOrderAndPayButton();
    await page.waitForEvent('load')
    expect(page.url()).toContain('order-confirmation')
    const mailosaurServerId = 'ppd12m2o';
    const email = await mailosaur.messages.get(mailosaurServerId,
       {
      sentTo: testEmail
    });
    expect(email.subject).toEqual('Order Confirmation');
  });
});

test.afterEach(async ({ page }) => {
await page.close()
})