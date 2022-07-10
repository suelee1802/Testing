
Cypress.Commands.add('profileTypeValueByName', (fieldName, inputValue) => {
  cy.get(`#${fieldName}`).clear().type(inputValue)

});

Cypress.Commands.add('profileCompareValueByName', (fieldName, inputValue) => {
  cy.get(`#${fieldName}`).invoke('val')
  .then(value => expect(value).eq(inputValue))
});