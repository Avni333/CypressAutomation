import 'cypress-file-upload'

describe('File uploading Test',()=>{
 
    it('Upload a file from fixture',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('22-mar-2023.pdf')
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('22-mar-2023.pdf')
    })

    //Rename file name while uploading
    it('Upload a file from fixture',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'22-mar-2023.pdf', fileName: 'Anita.pdf' , mimeType:'pdf'})
        cy.get('#file-submit').click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('Anita.pdf') 
    })

    //Uploading a file with Drag and drop

    it('Upload a file from fixture',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('20-mar-2023.pages', {subjectType: 'drag-n-drop'})
        cy.wait(3000)
        cy.get('#drag-drop-upload').contains('20-mar-2023.pages')
    })

    //Uploaddin Multiple files at once, arrays
    it('Multiple files Uploading',()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get('#filesToUpload').attachFile(['Day5.txt','leo.png'])
        cy.get('#fileList>li').should('have.length','2')
    })

    //Upload file in Shadow DOM
    it.only('Upload in Shadow Dom',()=>{  
         cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
         cy.get('.smart-file-upload-header',{includeShadowDom:true}).attachFile('leo.png')
     })

})