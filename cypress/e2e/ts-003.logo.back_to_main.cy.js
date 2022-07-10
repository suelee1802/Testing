/// <reference types="cypress" />

/*
  Scenario : user can move to main page by clicking logo name on the top

  GIVEN user click main menus
        Overall Rating | Popular Model | Popular Make)
    AND link to each page
   WHEN user click logo name on the top
   THEN user move to main page
*/


describe('click logo inside pages will move to main page', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('inside Overall Rating page logo lead to main page', () => {
    cy.mainPageFindMenuAndClick('Overall Rating');
    cy.currentLocation('overall')
    cy.mainPageFindNavBrandAndClick()
    cy.currentLocation('/',false)
  })

  it('inside Popular Model, logo lead to main page', () => {
    cy.mainPageFindMenuAndClick('Popular Model');
    cy.currentLocation('model')
    cy.mainPageFindNavBrandAndClick()
    cy.currentLocation('/',false)
  })

  it('inside Popular Make page logo lead to main page', () => {
    cy.mainPageFindMenuAndClick('Popular Make');
    cy.currentLocation('make')
    cy.mainPageFindNavBrandAndClick()
    cy.currentLocation('/',false)
  })

})