describe('Handling Tab limitation',()=>{
 
    it('Approach 1',()=>{
    cy.visit("https://the-internet.herokuapp.com/windows")
    cy.get(".example>a").invoke('removeAttr','target').click();
     //removed the target attribute , so that it opens on same window
    //now do assertion
    cy.url().should('eq','https://the-internet.herokuapp.com/windows/new')
    cy.go('back')
})


  it.only('Approach 2',()=>{
    cy.visit("https://the-internet.herokuapp.com/windows")
    cy.get(".example>a").then((e)=>{
     let url = e.prop('href') //href stores the target page ,so we are extracting that value
     cy.visit(url)
    })
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
    cy.go('back')
  })
})