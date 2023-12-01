class CartPage
{

getAddToCartPage()
{
return cy.get('input#add-to-cart-button')

}
getToBascketPage()
{
return cy.get ('a#nav-cart')    
}
getProductDetail()
{
return cy.get('.a-color-base > .a-truncate > .a-truncate-cut')
}
getCheckoutButton()
{
return cy.get('input[value="Proceed to checkout"]')    
}
getSignInPage()
{
return cy.get('h1[class="a-spacing-small"]')    
}
getNoThanksButton()
{
    return cy.contains(' No thanks ')
   // return cy.get('.a-button-close > .a-icon')
}
getDeleteButton()
{
    return cy.get('input[value="Delete"]')
}
getDeleteConfirmText()
{
    return cy.get('[data-action="delete"] > .a-size-base')
}
getProductTitle()
{
    return cy.get('div [id="title_feature_div"] div[id="titleSection"] h1 span[id="productTitle"]')
}
getBuyNowButton()
{
    return cy.get('span[id="submit.buy-now"]')
}
}
export default CartPage;