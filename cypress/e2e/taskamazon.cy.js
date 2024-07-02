describe("amazon open task",()=>{
    it('UI Elements validate and test',()=>{
     cy.visit('https://www.amazon.in/')
     cy.get('#twotabsearchtextbox').type('laptop')
     cy.get('#nav-search-submit-button').click()
     cy.wait(3000)
     cy.get('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').eq(0).invoke('removeAttr','target').click()
     cy.get('input[value="Add to Cart"]').eq(1).click()
    })


})





