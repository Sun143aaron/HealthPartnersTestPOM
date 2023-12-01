class SandwichIcon
{

getSandwichIcon()
{
    return cy.get('#nav-hamburger-menu')
}
getMainMenuOption()
{
    //return cy.get('.hmenu-visible > :nth-child(12) > .hmenu-item > div')
    return cy.get('#hmenu-content ul li div')
}
getChildMenuOption()
{
    return cy.get('ul.hmenu.hmenu-visible.hmenu-translateX li a.hmenu-item')
}
getSearchItem()
{
    return cy.get('Fire Kids Tablets')
}
getSearchTitle()
{
    return cy.get('div[class="a-section a-spacing-medium"] div div span.a-size-base.a-color-state.a-text-bold')
}













}

export default SandwichIcon;