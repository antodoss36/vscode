describe("Basic UI elements handling",()=>{
    it('UI Elements validate and test',()=>{
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       cy.get('[value="radio2"]').check().should('be.checked');
       cy.get('#checkBoxOption2').check().should('be.checked')
       cy.wait(4000)
       cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
      cy.get('label input[type="checkbox"]').check(["option1","option3"]).should('be.checked')
      cy.get('select').select('option2').should('have.value','option2')
      cy.get('[placeholder="Type to Select Countries"]').type('in');
        cy.get('.ui-menu-item div').each(($options)=>{
          if($options.text().includes('India')){
            cy.wrap($options).click({force:true})
          }

        }) 
        cy.get('[placeholder="Type to Select Countries"]').should('have.value','India')

      })
})
describe("iframe work",()=>{
  it('iframe frome practice page',()=>{
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
     cy.on('window:before:load',(win) => {

     cy.stub(win,'open').callsFake((url) =>{
     win.location.href = url;
     })


     })
     



  })
})
describe('Elements Handling', () => {
  it('iframe', () => {
  cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
 cy.frameLoaded('#courses-iframe')
 cy.iframe().find('a[href*="mentorship"]').eq(0).click()
cy.fr
  })

})