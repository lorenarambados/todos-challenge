//the tests are relevant because they show that the edit option works 
//and to can add words anywhere in the item description

var info
describe('edit items', () => {
    before(() => {
      cy.visit('/')
      cy.fixture(`datosTodo`).as('data').then((data) =>{
        info=data
    })
    })
    
    it('add word to start', () => {
        //check that the element that you need edit exist and selected
        //check that words can be added to the beginning of the description
        
        cy.goToAll()
        cy.get('#todo-list')
          .contains(info.addItem).dblclick()
        cy.get('.editing')
          .type('edited -{enter}')
          .wait(5000)
        cy.get('#main')
          .contains('edited -'+info.addItem)
    
          info.itemEdited= 'edited -'+info.addItem
    

    })
    it('add word at the end', () => {
      //check that the element that you need edit exist and selected
      //check that words can be added to the end of the description

        cy.goToAll()
        cy.get('#todo-list')
          .contains(info.itemEdited).dblclick()
        cy.get('.editing')
          .type('{movetoend}- end')
          .wait(5000)
        info.itemEdited= info.itemEdited+'- end'
        console.log('-----aqui   '+ info.itemEdited)
        cy.get('#main')
          .contains(info.itemEdited)
    })
    
})