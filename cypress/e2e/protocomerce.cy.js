describe('example test practice',()=>{
    let collect;
    before(()=>{
        cy.fixture('example').then((testdata)=>{
            collect = testdata
        })
    
    })
       it('data driven',()=>{
      
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]').eq(0).type(collect.Name)
        cy.get('[name="email"]').type(collect.Email)
        cy.get('[placeholder="Password"]').type(collect.Password)
        cy.get('[id="exampleCheck1"]').click()
        cy.get('[id="inlineRadio2"]').click()

        cy.get('[name="bday"]').type(collect.Date_of_Birth)
        cy.get('[class="ng-untouched ng-pristine ng-valid"]').should('have.text','')
        cy.get('input[type="submit"]').click()

        cy.get('a[class="nav-link"]').eq(1).click()
       })
    })

       {
        describe('protocomerce',()=>{
            let pro;
            before(()=>{
                cy.fixture('example').then((prod)=>{
                    pro=prod;})
                })beforeEach(()=>{
                    cy.visit('/')
                })
                it('validate product adding to cart functionality',()=>{
                    pro.productsToAdd.forEach((mobiles)=>{
                        cy.addingproductToCart(mobiles)

                    })
                })
            })

       }




        
