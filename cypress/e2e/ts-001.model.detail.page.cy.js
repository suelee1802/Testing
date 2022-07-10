/// <reference types="cypress" />

/*
  Scenario : user can move to main page by clicking logo name on the top

  GIVEN user doesn't log in
   WHEN user move to model detail page
   THEN user can see detail page components
   * maker logo
   * maker name
   * specification
   * vote section
   * comment field should not exist
*/

describe('brand & model detail page', () => {
  var models = [
    {
      make : "c4u1mqnarscc72is013g",
      brand : "7Cc4u1mqnarscc72is0160"
    },
    {
      make : "c4u1mqnarscc72is013g",
      brand : "7Cc4u1mqnarscc72is0140"
    },
    {
      make : "c4u1mqnarscc72is013g",
      brand : "7Cc4u1mqnarscc72is0170"
    }
  ]

  beforeEach(() => {
    cy.visit('/')
  })

  models.forEach((model, index) => {

    it(`${model.make} > ${model.brand}`, () => {

      cy.visit(`/model/${model.make}%${model.brand}`)

      //find maker logo
      cy.get('.img-fluid.center-block')

      //find maker name
      cy.get('.card-block.text-xs-center')

      //find specification
      cy.contains('.card-block','Specification')

      //find vote section
      cy.contains('.card-block','Votes')

      //comment field should not exist because it doesn't log in
      cy.get('#id').should('not.exist')

    })
  })

})
