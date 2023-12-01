/// <reference types ="Cypress" />
import HomePage from "../PageObjectModel/Homepage"
import CartPage from "../PageObjectModel/CartPage"


const homePage = new HomePage()
const cartPage = new CartPage()

    describe('Text box search', function () {
        before(function () {
            cy.fixture("example").then(function (data) {
                this.data = data
            })
        })
    
  
    it('Add and delete product from cart',function (){
    
         // Navigate to website by using Custom Commnads
         cy.amazonUrl();
         homePage.getCoockies().click();


         // Type in text box and click search
         homePage.getTextBox().type(this.data.searchProduct)
         homePage.getSubmitButton().click()
    
    
          //select the item from result table
         let clickCount = 0;
         homePage.getItemName().each(($el, index, $list) => {
            const itemName = $el.text()
            if ((itemName.includes(this.data.searchProduct)) && (clickCount == 0)) {
                cy.wrap($el).click()
                clickCount++
            }
        })
    
         // Adding item to Cart
         
         homePage.getProductTitle().should('include.text', this.data.searchProduct)
         cartPage.getAddToCartPage().click()
         cy.wait(1500)
         cartPage.getNoThanksButton().click({force: true})

         // Deleting Item from the card and validate delete message
         cartPage.getToBascketPage().click({force: true})
         cartPage.getDeleteButton().click()
         cartPage.getDeleteConfirmText().should('include.text', ' was removed from Shopping Basket. ')

    })
    
    
    })