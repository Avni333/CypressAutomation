class Login
{
   txtusername = "input[placeholder='Username']";
   txtpassword = "input[placeholder='Password']" ;
   txtbutton= "button[type='submit']";
   expected_element= ".oxd-topbar-header-breadcrumb > .oxd-text";

   setUsername(username)
   {
     cy.get(this.txtusername).type(username)
   }

   setPassword(password)
   {
     cy.get(this.txtpassword).type(password)
   }

   clickButton()
   {
    cy.get(this.txtbutton).click()
   }

   verifyLogin()
   {
    cy.get(this.expected_element).should('have.text','Dashboard')
   }
}

export default Login;