/* eslint-disable no-undef */
describe('Footer', () => {
  before(() => {
    cy.visit('/')
  })
  it('After typing name and email, a message should appear', () => {
    cy.get('[data-cy=footer-name]').type('Luke Brobbin')
    cy.get('[data-cy=footer-email]').type('testemail@gmail.com')
    cy.get('[data-cy=footer-submit]').click()
    cy.get('[data-cy=footer-message]')
  })
  it('Should display a twitter, instagram and facebook icon', () => {
    cy.get('[data-cy=footer-icons]')
  })
})
