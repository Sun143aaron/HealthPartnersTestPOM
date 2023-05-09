class ProductPage
{

slectProduct()
{
    cy.get('#search_query_top').type('blouse')
    cy.get('div[class="ac_results"]').click()

}
productDescription()
{
    cy.get('#short_description_content').should('contain.text','Short-sleeved blouse')


    cy.get(1500)

}
addToCartButton()
{
    cy.get('#add_to_cart > .exclusive').click()
}
assertCartText()
{
   // cy.get('.title > .ajax_cart_product_txt_s').should('contain.text','items in your cart')
    cy.get('.title > .ajax_cart_product_txt_s').should(($el) => {
		const text = $el.text();
		const cleanText = text.trim();
		expect(cleanText).to.eq('There are 1 items in your cart.');
	  });
}
checkoutButton()
{
    //cy.get('div.layer_cart_cart.col-xs-12.col-md-6 div.button-container:nth-child(5) > a.btn.btn-default.button.button-medium').click()
    cy.get('i[class="icon-chevron-right right"]').eq(2).click()
}
deleteCartOrder()
{
    cy.get('.shopping_cart').click() // open cart
    
    cy.get('.icon-trash').click() // Delete order in cart

}
assertCartSummary()
{
    cy.get('.alert.alert-warning').should('contain.text','Your shopping cart is empty.' )
   
}














}
export default ProductPage;