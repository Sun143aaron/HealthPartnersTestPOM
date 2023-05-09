class MainPage
{


pageTitleAssert(){
    cy.title().then(title => {
        cy.log(title);
      });
      cy.title().should('include', 'Ryviu Shop - Product reviews app');
}    
 
firstDefaultProduct()
{
    cy.get('h1[class="heading-2"]').should('contain.text', 'Product review app');
    cy.wait(3400);
}

secondDefaultProduct(){

    cy.get('div[class="bx-viewport"] li:nth-child(4) div').should('contain.text', 'EXCEPTEUR');
}
homePageSliderLength(){
    cy.get('li[class="homeslider-container"]').then(($el) => {
        const homepageSlidercount = Cypress.$($el).length
        expect(homepageSlidercount).to.equal(3)
    })
}
popularProductDefault(){
    cy.get('li[class="active"]').should('have.text', 'Popular');
    cy.wait(1200)
}

 
totalListingProduct()
{
    cy.get('body').then($body => {
        var countOfPopularProduct
    
          if ($body.find('ul[class="product_list grid row homefeatured tab-pane active"]').length > 0) {
              cy.get('a[class="product-name"]').then($countAllPopularProduct => {
              countOfPopularProduct = Number($countAllPopularProduct.length)
              cy.log("*** Total Product is ***  " + countOfPopularProduct)
            })
    
          } else {
              return countOfPopularProduct = 0
          }
    
        })

}
printDefaultDisplayProduct()
{
    cy.get('ul[class="product_list grid row homefeatured tab-pane active"]').find('a[class="product-name"]').each(($ele) => {
      
        cy.log($ele.text());
  
      })

}
lengthPopularProduct()
{
    cy.get('ul.product_list.grid.row.homefeatured.tab-pane.active')
    .find('a.product-name')
    .its('length')
    .then((count) => {
    cy.log('Total count for Popular product is ' + count)
    expect(count).to.equal(7)
    })


}



}

export default MainPage;

