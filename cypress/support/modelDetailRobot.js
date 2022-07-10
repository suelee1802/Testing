Cypress.Commands.add('modelDetailFindMakeLogo', () => {
  cy.get('.img-fluid.center-block')
});


Cypress.Commands.add('modelDetailFindMakeName', () => {
  cy.get('.img-fluid.center-block')
    .invoke('text')
    .then((name)=> {
      return name
    })
});


Cypress.Commands.add('modelDetailFindSpecification', () => {
  return cy.modelDetailFindCards('Specification')
});

Cypress.Commands.add('modelDetailFindVotes', () => {
  return cy.modelDetailFindCards('Votes')
});


Cypress.Commands.add('modelDetailFindCards', (name) => {
  return cy.contains('.card-block',name)
});



