Cypress.Commands.add('mainPageFindMenuAndClick', (mainManuName) => {
  cy.get('.card').contains(mainManuName)
  .siblings('a').click();
});


Cypress.Commands.add('mainPageFindNavBrandAndClick', () => {
  cy.get('.navbar-brand').contains('Buggy Rating')
  .click();
});


Cypress.Commands.add('mainPagelogin', (loginId, password) => {
  cy.get('[name=login]')
  .type(loginId)

  cy.get('[name=password]')
  .type(password)

  cy.contains('button', 'Login').click()
  cy.wait(1000)
});


//After login

Cypress.Commands.add('mainPageFindNavMenu', (menuName) => {
  cy.contains('.nav-link', menuName)
    .click()
});


