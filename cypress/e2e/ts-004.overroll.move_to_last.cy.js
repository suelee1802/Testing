/// <reference types="cypress" />

/*
  Scenario : user move to overall page and type specific number in the page number text, then the page will update

  GIVEN user move to Overall Rating
    AND read total page number
   WHEN type the maxmum page number
   THEN the page will display item by its rank order
        (start : 5 * (page number - 1) + 1 / end : 5 * (page number) )
*/

describe('overroll page will data update when user type page number', () => {
  var eachPageItems = 5;

  beforeEach(() => {
    cy.visit('/')
  })

  it('overRoll Page move to the end by type page max number ', () => {

    cy.mainPageFindMenuAndClick('Overall Rating');
    cy.currentLocation('overall')

    cy.overRollGetMaxPage()
      .overRollNavigatePageByPageNumber()
      .isPageCorrect()

  })



})