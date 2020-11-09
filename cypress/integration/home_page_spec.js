describe('Frontpage opens', () => {
  it('Visiting app', () => {
    cy.visit('/')
  })
})

describe('Testing navigation', () => {
    it('clicks skills', () => {
      cy.get('[href="#/skills"]').click()
      cy.url().should('include', '/skills')
    })

    it('clicks spells', () => {
      cy.get('[href="#/spells"]').click()
      cy.url().should('include', '/spells')

    })

    it('clicks talents', () => {
      cy.get('[href="#/talents"]').click()
      cy.url().should('include', '/talents')
  })
})
