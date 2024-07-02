describe("commerces demo UI elements handling",()=>{
    it('UI Elements validate and test',()=>{
       cy.visit("https://commercejs-demo-store.netlify.app/")
       cy.get('a[class="d-flex align-items-center bg-transparent border border-color-white h-56 px-5 font-color-white hero-btn"]').eq(0).click({force:true})
       cy.get('p[class="mb-2 position-relative cursor-pointer"]').eq(0).click()
       cy.get('p[class="font-size-subheader mb-2 font-weight-medium"]').eq(1).click()
       cy.get('span[class="flex-grow-1 mr-3 text-center"]').click()
       cy.get('div[class="position-relative cursor-pointer"]').click()
       cy.get('div[class="col-12 col-md-6"]').click()

    })
})