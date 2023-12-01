/// <reference types ="Cypress" />
import HomePage from "../PageObjectModel/Homepage"
import SubDealsPage from "../PageObjectModel/SubDealsPage"
import CartPage from "../PageObjectModel/CartPage"




const homePage = new HomePage()
const subDealsPage = new SubDealsPage()
const cartPage = new CartPage()





describe('Todays Deals Search',function (){

    before(function(){
        cy.fixture("example").then(function(data)
        {
            this.data=data
        }
        )
    })

    it('Proceed Until Payment is required', function (){
    
        // Navigate to website by using Custom Commnads
        cy.amazonUrl();
        homePage.getCoockies().click();

        // Clicking on Today's Deals from top Menu
        let count = 0;
        homePage.getTopBarMenu().each(($el, index, $list) => {
            const itemName = $el.text()
            if ((itemName.includes(this.data.topMenu)) && (count == 0)) {
                cy.wrap($el).click()
                count++
            }
        })
    
        // Proceed until payment is required
        subDealsPage.getPageHeader().should('contain.text', "Today's Deals")
        cy.wait(2000)
        

        subDealsPage.getItemSelect().click()
        cartPage.getProductTitle().should('be.visible')
        cartPage.getBuyNowButton().click()
        cartPage.getSignInPage().should('include.text',"Sign in")

    
    
    
    })
    
    
    
    
    })












