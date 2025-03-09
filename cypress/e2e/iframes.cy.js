import 'cypress-iframe' 

describe('Hangling frames doc',()=>{
    it('iframe - check it', function () {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible')
    });

    //approach 2 with plugin
    it.only('iframe handling with plugin',()=>{
     cy.visit("https://the-internet.herokuapp.com/iframe");
     cy.frameLoaded("#mce_0_ifr").should('be.visible').should('have.text','Your content goes here.') //this will only load the frame but no interaction can happen
    cy.iframe("#mce_0_ifr").clear().type("Welcome {cmd+a}")
    cy.get("[aria-label='Bold']").click();
    })
})


