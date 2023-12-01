/// <reference types ="Cypress" />
import CommitqualityPage from "../PageObjectModel/commitQualityPage";

const commitQualityPage = new CommitqualityPage;

describe('Cross Domain Test', function () {

    it('Test for Cross Domain', function () {
        cy.visit("https://commitquality.com/");
        commitQualityPage.getFilterTextBox().type('Java')
        commitQualityPage.getFilterButton().click()
        commitQualityPage.getErrorMsg().should('include.text', "No products found")
        commitQualityPage.getResetButton().click()
        commitQualityPage.getErrorMsg().should('not.exist')
        cy.wait(1000)

        // Visit second domain and perform some action
        cy.visit("https://www.demoblaze.com/");  
        cy.origin("https://www.demoblaze.com/", () => {

        const DemoBlazePage = Cypress.require('../PageObjectModel/DemoBlazePage')    
        const demoBlazePage = new DemoBlazePage()
        
        demoBlazePage.getTabCart().click()
     

	//removing expression /\n/g which matches all newline characters in the string and replaces them with an empty string ''
   
        cy.get('div[class="col-lg-8"]').then(($el) => {
           const text = $el.text();
           const cleanText = text.replace(/\n/g, '').trim();
           expect(cleanText.includes('Products')).to.be.true;
        });
    

        cy.wait(1000) 
    })

        cy.visit("https://commitquality.com/"); //return to primary domain and continue test
        commitQualityPage.getLogInTab().click()
        commitQualityPage.getLogInPageText().should('include.text', 'Login')
        commitQualityPage.getUserName().type('Test')
        commitQualityPage.getPassword().type('Password')
        commitQualityPage.getLoginButton().click()
        commitQualityPage.getLoginErrorMessage().should('include.text', 'Invalid username or password')
        


    })
})
