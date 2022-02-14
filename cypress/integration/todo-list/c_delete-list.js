
describe('todos site', () => {
  beforeEach(() => {
    cy.visit('/')
  })

    it('delete active item', () => {
        //it is relevant since any element active should be able to be removed and 
        //the test is sufficient as it looks for an element and removes it
        cy.goToActive()
        const item = cy.get('.destroy').eq(1)
        cy.get('.destroy').invoke('show').eq(1).click().wait(500)
        cy.get('#todo-list').should('not.contain.text' , item)
    })

})
