describe('Home page renders', () => {
  it('Should render the home page', () => {
    cy.visit('/')
  })
})
describe('Homepage elements', () => {
  it('Should contain a description paragraph', () => {
    cy.get('.pages__Description-jKfSsb')
  })
  it('Should contain an iFrame', () => {
    cy.get('[data-cy=home-page-iframe]')
  })
  it('Should contain a header', () => {
    cy.get('[data-cy=header]')
  })
  it('Should contain a footer', () => {
    cy.get('[data-cy=footer]')
  })
})

describe('Navbar', () => {
  it('Links should take you to correct pages', () => {
    cy.get('[data-cy=nav-about]').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/about/')
    })
    cy.get('[data-cy=nav-cast]').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/cast/')
    })
    cy.get('[data-cy=nav-gallery]').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/gallery/')
    })
    cy.get('[data-cy=nav-tourdates]').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/tourdates/')
    })
  })
})
