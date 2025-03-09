describe('from a single file',()=>{
    
    let userdata; //global variable
    before(()=>{
      cy.fixture('orangehrm.json').then((data)=>{
        userdata = data
      })
    })

    it('Test1',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected)
         
})

})

describe("Taking Multiple Datas from fixture",()=>{
    
    it('Datadriven testing',()=>{
    cy.fixture('orangehrm2.json').then((data)=>{   //here data is array
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
     data.forEach((userdata=> {
        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()

        if(userdata.username=='Admin' && userdata.password=='admin123')
        {
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected)
            //logout process
            cy.get('.oxd-userdropdown-name').click()
            cy.get(".oxd-dropdown-menu> :nth-child(4)").click()
        }

        else
        {
         cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text',userdata.expected)
        }
        
     }
     ))})})
    
})
