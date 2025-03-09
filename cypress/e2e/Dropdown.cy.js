describe('Different type Dropdown Handle',()=>{
 
    it('Dropdown without Bootstrap',()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        //Select Dropdown and Do Assertion
        cy.get('#zcf_address_country')
        .select('Netherlands')
        .should('have.value','Netherlands')
    })

    it('Dropdown with Bootstrap',()=>{
     cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
     cy.get('#select2-billing_country-container').click()
     cy.get("input[role='combobox']").type('Nepal').type('{enter}')
     //do assertion ,here have.value cannot be used as it is bootstrap dropdown
     cy.get('#select2-billing_country-container').should('have.text','Nepal')
    })
   
    //Auto-suggested Dropdown
    it("Auto-suggested Dropdown handling",()=>{
      cy.visit("https://www.wikipedia.org/")
      cy.get('#searchInput').type('Delhi')
      cy.get('.suggestion-link').should('have.length','6')
      cy.get('.suggestion-link').contains('Delhi University').click()

    })

    //Dynamic Dropdown
    it.only('Dynamic dropdown', ()=>{
     cy.visit("https://www.google.com/")
     //Accept cookies
     cy.get('#L2AGLb > .QS5gu').click()
     cy.get('#APjFqb').type('Cypress automation')
     cy.wait(3000)
     cy.get("div.wM6W7d>span").should('have.length','13')
     cy.wait(3000)
     cy.get("div.wM6W7d>span").each(($el,index,$list)=>{
      if($el.text()== 'cypress automation tool')
      {
        cy.wrap($el).click()
      }
     })

     //assertion after click
     //cy.url().should('include',''),should('eq','')
     cy.get('#APjFqb').should('have.value','cypress automation tutorial')
    })
})
