//import variables from '../fixtures/variables.json'
var info
describe('Check the add functionality', () => {

  beforeEach( () => { 
    cy.visit('/')
    cy.fixture(`datosTodo`).as('data').then((data) =>{
        info=data
    })
  })


    it('add new item', () => {
        //check that the element can be added
        //check the item is added as active item
        //this test is relevant because the test minimally simulates a user 
        //input and also checks that if the added item is new, it is in the active list as it was not selected as done when it is created
       
        cy.get('#new-todo')
          .type(info.addItem +'{enter}')
        cy.goToActive()
        cy.get('#todo-list')
          .should('contain', 'new item')
    })
})
    
