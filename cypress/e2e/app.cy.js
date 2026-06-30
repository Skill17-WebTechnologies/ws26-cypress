describe('WSC2026 Cypress app', () => {
  it('loads the page and reacts to a click', () => {
    cy.visit('/')
    cy.contains('h1', 'Cypress')
    cy.get('#out').should('have.text', '')
    cy.get('#btn').click().click()
    cy.get('#out').should('contain', 'Clicked 2 times')
  })
})
