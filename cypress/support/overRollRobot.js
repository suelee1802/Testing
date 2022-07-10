Cypress.Commands.add('overRollNavigatePageByPageNumber',{ prevSubject: 'optional'}, (prevPageNumber, pageNumber) => {

  var currentPage = prevPageNumber??pageNumber

  cy.get('.form-control.input-xs')
    .clear()
    .type(currentPage + "{enter}")
    .wait(1000)

  return cy.wrap(currentPage)
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

Cypress.Commands.add('isPageCorrect',{ prevSubject: 'optional'}, (prevPage, currentPage) =>{
  var eachPageItems = 5
  var pageNumber = prevPage??currentPage

  //cy.overRollNavigatePageByPageNumber(maxPage)
  cy.log(pageNumber)
  cy.overRollReadFirstRank()
    .then(value => {
      expect(value).eq((pageNumber -1) * eachPageItems + 1)
    })

  cy.overRollReadLastRank()
  .then(value => {
    expect(value).eq(pageNumber * eachPageItems)
  })
})
