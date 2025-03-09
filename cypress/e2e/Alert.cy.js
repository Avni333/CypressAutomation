describe('Handling of Different Alert window',()=>{

    
    // Normal JS Alert with OK button
   it('JS Alert',()=>{
       cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       cy.get("button[onclick='jsAlert()']").click()
      //assertion 1
       cy.on('window:alert',(t)=>{
        expect(t).to.contains('I am a JS Alert')
       })
      // Cypress closes the alert by default choosing OK .. no need to click

      //assertion 2
      cy.get('#result').should('have.text','You successfully clicked an alert')

   })

   //JS Alert with confirm ,where Cancel and OK button 
     it('JS Confirm alert Box - OK',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        //assertion 1
        cy.on('window:confirm',(t)=>{
          expect(t).to.contains('I am a JS Confirm')

        })

        //Cypress close alert button with OK by default
        //assertion 2
        cy.get('#result').should('have.text','You clicked: Ok')

     })

     it('JS Confirm alert Box - Cancel',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        //assertion 1
        cy.on('window:confirm',()=> false)
        cy.get('#result').should('have.text','You clicked: Cancel')

     })
 

      it('Handle JS Prompt alert Box',()=>{
         cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
         //Pass this event before pressing Prompt alert, so that as soon you press prompt
         //there is value ready to be enetered, and Cypress by default press OK
         //so capture that window and pass in variable
         cy.window().then((win)=>{
         cy.stub(win,'prompt').returns('Anita Subedi') //stub has occupied win and that win is prompt type
         })
         //Now click on Prompt element
         cy.get("button[onclick='jsPrompt()']").click()
         //cypress press oK by default
         //assertion
         cy.get('#result').should('have.text','You entered: Anita Subedi') 

     })

     it.skip('Handle JS Prompt alert Box -Cancel',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.get("button[onclick='jsPrompt()']").click()
        cy.on('window:prompt',()=> false) //window:prompt
        //cypress press oK by default
        //assertion
        cy.get('#result').should('have.text','You entered: null') 

    })

    //Authentication Alert Handling, username:password
    it('Authentication Alert Approach 1',()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        //assertion
        cy.get("div[class='example'] p").should('contain','Congratulations!')

    })

    it('Authentication Alert Approach 2',()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth", 
                                 { auth:
                                    {
                                   username: "admin",
                                   password: "admin", 
                                     }
                                  })
        cy.get("div[class='example'] p").should('contain','Congratulations!')
        
        
    })
})