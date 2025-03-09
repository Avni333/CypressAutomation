 import Login from '../PageObjects/LoginPageObject.js'

 describe("POM with Fixture",()=>{

    beforeEach(()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    
      
        it('Testcase of loginPage',()=>{
           
            cy.fixture('orangehrm.json').then((data)=>{
            //now create object reference variable
           const ln = new Login();
           ln.setUsername(data.username);
           ln.setPassword(data.password);
           ln.clickButton();
           ln.verifyLogin();
        })

    })
 })