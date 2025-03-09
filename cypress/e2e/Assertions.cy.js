describe('Assertionsuite',()=>{
context('Testcases using Assertions',()=>{

   it("Implicit Assertions",()=>{
   
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .should('include','orangehrmlive.com').and('contain','/auth/login').and('not.contain','greenhrm')
   
 })

   it("Few more testcases",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist') //selector from Test Runner
    cy.title().should('include','Orange')
    cy.xpath('//a').should('have.length','5') //counts total num of links in Webpage
   
 })
 
})

})

describe('Another Block of Assertion',()=>{

    it('Explicit',()=>{
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin').should('have.value','Admin')

     cy.get("input[placeholder='Password']").type('admin123')
     cy.get("button[type='submit']").click()
      
     let expname= "Ankit Singh" ;
     //store a locator value into variable using then()
     cy.get('.oxd-userdropdown-name').then((x)=>{
     let actname= x.text();  
       //BDD style 
       
        expect(actname).to.equal(expname)
        expect(actname).to.not.equal(expname)  //Failed
      
       //Tdd style
        assert.equal(actname,expname)
        assert.notEqual(actname,expname)      //Failed

})
})
})