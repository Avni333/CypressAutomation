describe('Check UI Elements',()=>{

    it('Test cases for RadioButtons',()=>{

    cy.visit("https://testautomationpractice.blogspot.com/")
     // 1. Check whether the buttons are visible on webpage
    cy.get('input#male').should('be.visible')
    cy.get('input#female').should('be.visible')

    //2. Check item should be visible
    cy.get('input#male').check().should('be.checked')
    cy.get('input#female').should('not.be.checked')

    //3. Do Viceversa
    cy.get('input#female').check().should('be.checked')
    cy.get('input#male').should('not.be.checked') 
    })
   
    
    it('Test cases for checkboxes',()=>{
     
        cy.visit("https://testautomationpractice.blogspot.com/")
    //1. check if checkboxes are visible
     cy.get('input#sunday').should('be.visible')

    //2. Check if checkboxes are clicked and checked
    cy.get('input#sunday').check().should('be.checked')
    cy.get('input#sunday').uncheck().should('not.be.checked')

    //3. Now check all boxes at a Time and uncheck Also
    cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
    cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

    //4. Now check only first and last buttons 
    cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
    cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
    })
})