
describe('suitname',()=>{
    context('Testcases',()=>{

   
    it('Test1',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
         //assertion 
         cy.get(".orangehrm-login-branding").screenshot('Logo')
    })

    it('Negative Test2',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','Esprit')
    })

})
})