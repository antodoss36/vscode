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