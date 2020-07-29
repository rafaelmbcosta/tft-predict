/* eslint-disable no-undef */
describe('Add player form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  
  it('check existance of input', () => {
    cy.get('.cy-playerName')
  })

  it.only('enter player input', () => {
    const playerName = 'Dangerous Player'
    cy.get('.MuiInputBase-input')
      .type(playerName)
      .should('have.value', playerName)
      .type("{enter}")

    cy.get('.MuiGrid-spacing-xs-2 > .MuiTypography-root')
      .should('have.text', playerName)

    cy.get('.MuiBox-root > .MuiTypography-root')
      .should('have.text', playerName)
  })
})