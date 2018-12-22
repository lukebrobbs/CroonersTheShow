/* eslint-disable max-len */
/* eslint-disable no-undef */
describe('Collapsed Navbar', () => {
  before(() => {
    cy.visit('/')
  })
  beforeEach(() => {
    cy.viewport('iphone-6')
  })
  it('Should have a Hamburger menu', () => {
    cy.get('[data-cy=hamburger]')
  })
  it('Should render the appropriate nav items when the navbar is opened and each link should go to the right location', () => {
    cy.get('[data-cy=hamburger]').click()
    cy.get('[data-cy=collapsed-about]').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/about')
    })
    cy.get('[data-cy=hamburger]').click()
    cy.get('[data-cy=collapsed-cast]').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/cast')
    })
    cy.get('[data-cy=hamburger]').click()
    cy.get('[data-cy=collapsed-gallery]').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/gallery')
    })
    cy.get('[data-cy=hamburger]').click()
    cy.get('[data-cy=collapsed-tourdates]')
  })
})
