Cypress.Commands.add('overRollNavigatePageByPageNumber', (pageNumber) => {
  cy.get('.form-control.input-xs')
    .clear()
    .type(pageNumber + "{enter}")
    .wait(1000)

});

Cypress.Commands.add('overRollReadFirstRank', () => {
  cy.get('tbody')
    .find('tr:first')
    .find('td')
    .then(elements => {
      //cy.log(elements.length)
      //cy.log(elements[3].textContent)
      return parseInt(elements[3].textContent.trim())
    })
});

Cypress.Commands.add('overRollReadLastRank', () => {
  cy.get('tbody')
    .find('tr:last')
    .find('td')
    .then(elements => {
      //cy.log(elements.length)
      //cy.log(elements[3].textContent)
      return parseInt(elements[3].textContent.trim())
    })
});


Cypress.Commands.add('overRollGetMaxPage', () => {
  cy.get('.row > .pull-xs-right')
    .contains('page')
    .invoke('text')
    .then((value) =>{
      var maxPage = value.split('of')[1].trim();
      return parseInt(maxPage)
    })
});


