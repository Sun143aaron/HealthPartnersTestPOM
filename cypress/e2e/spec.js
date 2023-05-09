/// <reference types="Cypress" />


import MainPage from '../PageObjectModel/MainPage'
import ProductPage from '../PageObjectModel/ProductPage'

const productpage = new ProductPage
const mainpage = new MainPage



describe('Partnerize Acceptance Test', () => {

  it('E2E Journey', () => {

    cy.goToURL() // accessing URL by Custom Command
    cy.url().should('contain', '.ryviushop'); // asserting url

    // Asserting and printing Page Title
    mainpage.pageTitleAssert

    // verifying default first and second prduct view 
    mainpage.firstDefaultProduct();   
    mainpage.secondDefaultProduct();
    
    // counting length of homepageSlider
    mainpage.homePageSliderLength();

    // Asserting "Popular Product Tab" selected by default
    mainpage.popularProductDefault();

    // Prinitng total count of all the listed product under "Popular, Specials, and Best Sellers"
    mainpage.totalListingProduct();

    // Printing all 7 product name which displays under Popular section
    
    mainpage.printDefaultDisplayProduct();

    // Printing the lentgth of the Popular section

    mainpage.lengthPopularProduct();
    
    // selecting product
    productpage.slectProduct();
    
    // Assert product description
    productpage.productDescription();

    // Adding product into cart
    productpage.addToCartButton();
    
    // Asserting Cart Product text
    productpage.assertCartText();

    
    // procced to checkout button
    productpage.checkoutButton
    
    // Delete added product from cart
    productpage.deleteCartOrder();

    // Assert shopping cart summary
    productpage.assertCartSummary();
    
  })
})