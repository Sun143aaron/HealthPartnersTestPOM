class SubDealsPage
{

   getPageHeader()
   {
    return cy.get('div#slot-2')
   }
   getItemSelect()
   {
      return cy.get('div[data-testid="grid-deals-container"] div').eq(0)
   //return cy.get('div[data-testid="grid-deals-container"] div div[aria-label="Deal: Bedsure Sherpa Fleece Blankets and Throws; "]')

   }
  
  
}
export default SubDealsPage;