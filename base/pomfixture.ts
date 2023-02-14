import {test as baseTest} from "@playwright/test"

import loginPage from "../pages/loginPage" ;
import RegisterPage from "../pages/registration" ;
import CheckoutPage from "../pages/checkoutpage" ;

type pages ={
    registerPage: RegisterPage;
    LoginPage : loginPage;
    checkoutPage : CheckoutPage
}

const testPages = baseTest.extend<pages>({

    registerPage: async ({ page}, use) => {
          await use(new RegisterPage(page))  
    },

    LoginPage: async ({ page}, use) => {
          await use(new loginPage(page))  
    },

    checkoutPage: async ({ page}, use) => {
        await use(new CheckoutPage(page))  
  },

})

export const test = testPages ;
export const expect = testPages.expect;