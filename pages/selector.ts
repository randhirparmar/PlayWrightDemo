export const login = {
    username : '//*[@id="account-username-username"]',
    pwd : '//*[@id="account-password-password"]',
    submit: '//*[@data-test="account-submit"]'
};

export const registration = {
    fname : '//*[@name="firstName"]',
    lname : '//*[@name="lastName"]',
    email : '//*[@id="REGISTRATION-email"]' ,
    pwd : '//*[@id="REGISTRATION-password"]' ,
    createAccount : '//span[contains(text(),"create account")]' 
};

export const selectProduct = {
    makeup : '//a[@title="Makeup"]',
    eyeCream : '//div[contains(text(),"Eye Cream")]'
};

export const navigateToBasket = {
    viewYourShoppingBag : '//*[@aria-label="Account & Basket"]//a[@aria-label="View your shopping bag"]',
    viewBagAndCheckout : '//*[@title="view bag & checkout"]'
};

export const checkout = {
    checkoutButton : '//*[@data-test="checkout-button"]'
};

export const deliveryAddress = {
    address_fname : '//*[@id="DELIVERY_ADDRESS-firstName"]',
    address_lname : '//*[@id="DELIVERY_ADDRESS-lastName"]',
    address_finder : '//*[@id="address-finder-search-addressFinderLookupSearch"]',
    address_telephone : '//*[@id="DELIVERY_ADDRESS-telephone"]'
};

export const deliveryMethod = {
    continueToDelMethod : '//div//*[contains(text(),"Continue to Delivery Method")]'
};

export const paymentMethod = {
    continueToPayMethod : '//div//*[contains(text(),"Continue to Payment")]'
};

export const selectPaymentMethod = {
    inputFrame : '//*[@title="Secure card payment input frame"]',
    cardNo : '//*[@placeholder="Card number"]',
    expDate : '//*[@placeholder="MM / YY"]' ,
    cvc : '//*[@placeholder="CVC"]'
};

export const placeOrderAndPayButton = {
    submitOrder : '//button[@data-test="submit-order"]'
};

export const selectSamples = {
    button_choosesamples : '//*[@data-test="choose-samples-cta"]',
    wonderglow : '//*[@data-test="product-selector-item-cta"]',
    magicEyeRescue : '//*[contains(text(),"MAGIC EYE RESCUE")]/parent::div//button',
    button_samplecheckout : '//button[@data-test="samples-checkout-cta"]'

};

export const acceptCookie = {
    button_acceptCookies : '//button[contains(text(),"Accept All Cookies")]'
};

export const popup = {
    link_notthistime : '//button/span[contains(text(),"Not this time")]'
};

export const basket = {
    item : '//div[@class="Overlay"]',
    bag : '//span[@class="OrderItemProduct"]'
};

