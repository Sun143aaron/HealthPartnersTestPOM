/// <reference types ="Cypress" />
import HomePage from "../PageObjectModel/Homepage"
import SandwichIcon from "../PageObjectModel/Sandwich"


const homePage = new HomePage()
const sandwichIcon = new SandwichIcon() 



describe('Sandwich Icon search', function () {
    before(function(){
        cy.fixture("example").then(function(data)
        {
            this.data=data
        }
        )
    })

    it('Search for Fire Tablets for kids ',function() {
    
    
         // Navigate to website by using Custom Commnads
         cy.amazonUrl();
         homePage.getCoockies().click();
    
         sandwichIcon.getSandwichIcon().click()
         

    //Select 'Fire Tablets' from Main Menu
        let menuCount = 0;
    
        sandwichIcon.getMainMenuOption().each(($el, index, $list) => {
        const itemName = $el.text()
        if ((itemName.includes(this.data.Option)) && (menuCount == 0)) {
            cy.wrap($el).click()
            menuCount++
        }
    })
    //Select 'Fire Tablets for kids' from child menu
    cy.wait(2000)
    //cy.get('ul.hmenu.hmenu-visible.hmenu-translateX li a.hmenu-item').click( {force: true} )
        let childmenuCount = 0;
        sandwichIcon.getChildMenuOption().each(($el, index, $list) => {
            const itemName = $el.text()
            if ((itemName.includes(this.data.Option1)) && (childmenuCount == 0)) {
                cy.wrap($el).click({force: true})
                childmenuCount++
            }
        })

        sandwichIcon.getSearchTitle().should('include.text', 'Fire Kids Tablets')
        


    
    





    
    })
    
    
    
    
    })