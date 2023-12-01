class HomePage
{

getTopBarMenu()
{
    return cy.get('#nav-xshop a')
}
getCoockies()
{
    return cy.get('#sp-cc-accept')
}
getTextBox()
{
    return cy.get('#twotabsearchtextbox')
}
getSubmitButton()
{
    return cy.get('#nav-search-submit-button')
}
getItemName()
{
    return cy.get('span[data-component-type="s-search-results"]').find('.a-size-medium.a-color-base.a-text-normal')
}
getProductTitle()
{
    return cy.get('#productTitle')
}

}
export default HomePage;