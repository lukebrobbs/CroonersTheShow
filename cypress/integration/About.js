describe('About page', () => {
  it('Should render the about page', () => {
    cy.visit('/about')
  })

  it('Should display a Crooners logo', () => {
    cy.get('[data-cy=about-page-logo]')
  })
  it('Should render an about section', () => {
    cy.get('[data-cy=about-page-about]')
  })
  it('Should render a The Story section', () => {
    cy.get('[data-cy=about-page-the-story]')
  })
  it('Should render an image at the bottom of the page', () => {
    cy.get('[data-cy=about-page-picture]')
  })
})
