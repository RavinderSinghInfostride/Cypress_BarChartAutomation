Cypress.Commands.add('VisitLineChartsPage', () => {
    cy.log(Cypress.config().baseUrl)
    cy.visit('/')
})