class DemoBlazePage 
{

getPhoneCategeory()
{
    return cy.get('a[onclick="byCat("phone")"]').click()
}
getTabCart()
{
    return cy.get('#cartur')
}
getCartTitle()
{
    return cy.get('div[class="col-lg-8"]')
}

}
export default DemoBlazePage;