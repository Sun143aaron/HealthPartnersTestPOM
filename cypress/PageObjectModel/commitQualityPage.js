class CommitqualityPage
{

getFilterTextBox()
{
    return cy.get('input[type="text"]')
}
getFilterButton()
{
 return cy.get('button[data-testid="filter-button"]')
}
getResetButton()
{
 return cy.get('button[data-testid="reset-filter-button"]')
}
getErrorMsg()
{
 return cy.get('p.add-product-message')
}
getLogInTab()
{
    return cy.get('a[data-testid="navbar-login"]')
}
getLogInPageText()
{
    return cy.get('h1')
}
getUserName()
{
    return cy.get('input[data-testid="username-textbox"]')
}
getPassword()
{
    return cy.get('input[type="password"]')
}
getLoginErrorMessage()
{
    return cy.get('.error')
}
getLoginButton()
{
    return cy.get('button[data-testid="login-button"]')
}


}
export default CommitqualityPage;