/* eslint-disable max-len */
/* eslint-disable no-undef */
describe('Cast Page', () => {
  before(() => {
    cy.visit('/cast/')
  })

  it('Should render an image for each cast member, which should link to the appropriate page', () => {
    cy.get('[data-cy=cast-image-Phil]').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/cast/Phil')
    })
    cy.get('[data-cy=cast-back]').click()
    cy.get('[data-cy=cast-image-Roman]').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/cast/Roman')
    })
    cy.get('[data-cy=cast-back]').click()
    cy.get('[data-cy=cast-image-Jim]').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.eq('/cast/Jim')
    })
    cy.get('[data-cy=cast-back]').click()
  })
})
