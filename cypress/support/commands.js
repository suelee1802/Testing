// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('buggyCarVisit', (locationPath) => {
  cy.visit(locationPath)

  return cy.location('pathname')
});

Cypress.Commands.add('currentLocation',{ prevSubject: 'optional'}, (subject,comparePath, isInclude = true) =>{
  cy.log(subject)

  if(subject != null) {
    if(isInclude) {
      expect(subject).include(comparePath)
    }
    else {
      expect(subject).equal(comparePath)
    }
  } else {
    cy.location(('pathname'))
    .then((path) => {
      if(isInclude) {
        expect(path).include(comparePath)
      }
      else {
        expect(path).equal(comparePath)
      }
    })
}
})

Cypress.Commands.add('idExists', (id) => {
  cy.get(`#${id}`).should('exist')
});

Cypress.Commands.add('idNotExists', (id) => {
    cy.get(`#${id}`).should('not.exist')
});
