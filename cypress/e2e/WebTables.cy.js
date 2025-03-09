describe('Web Tables Testing',()=>{

it('Testcase 1',()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")
    //Total no.of rows and columns check
    cy.get('table#taskTable>tbody>tr').should('have.length','4')
    cy.get('table#taskTable>thead>tr>th').should('have.length','5')

})

it('Testcase 2',()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")
    //Check the specific data from the table
    cy.get("table[name='BookTable']>tbody>tr:nth-child(4)>td:nth-child(3)").contains('Javascript')

})

//no assertion, only reading data
it.only('Read all data of a table',()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get("table#taskTable>tbody>tr").each(($row,index,$rows)=>{  //it captured 4 rows ,each with 5 datas
        cy.wrap($row).within(()=>{                              //tr[0] tr[1] tr[2] tr[3]
            cy.get('td').each(($col,index,$cols)=>{            //tr[0][0], tr[0][1] tr[0][2]
                cy.log($col.text())                        //to extract data another each loop is required
            })
        })
    })

})
})