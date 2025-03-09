import Login from '../PageObjects/LoginPageObject.js'

describe("POM with Array Fixture",()=>{


       it('Testcase of loginPage',()=>{
          
           cy.fixture('orangehrm2.json').then((data)=>{
         //now create object reference variable
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
          const ln = new Login();
          data.forEach((userdata)=>{
         
          if(userdata.username=='Admin' &&  userdata.password=='admin123')
            {
                ln.setUsername(userdata.username);
                ln.setPassword(userdata.password);
                ln.clickButton();
                ln.verifyLogin();
            }
          
        })
       })

   })
})