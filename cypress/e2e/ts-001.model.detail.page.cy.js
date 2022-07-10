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

   sample data : 1st & second pass, third fail(Lancia>Stratos)
*/

describe('brand & model detail page', () => {
  var models = [
    {
      makeId : "c4u1mqnarscc72is013g",
      makeName : "Lancia",
      brandId : "7Cc4u1mqnarscc72is0160",
      brandName : "Rally 037"
    },
    {
      makeId : "c4u1mqnarscc72is013g",
      makeName : "Lancia",
      brandId : "7Cc4u1mqnarscc72is0140",
      brandName : "Delta"
    },
    {
      makeId : "c4u1mqnarscc72is013g",
      makeName : "Lancia",
      brandId : "7Cc4u1mqnarscc72is0170",
      brandName : "Stratos"
    }
  ]

  beforeEach(() => {
    cy.visit('/')
  })

  models.forEach((model, index) => {

    it(`${model.makeName} > ${model.brandName}`, () => {

      cy.buggyCarVisit(`/model/${model.makeId}%${model.brandId}`)
        .currentLocation(`/model/${model.makeId}%${model.brandId}`)

      //find maker logo
      cy.modelDetailFindMakeLogo()

      //find maker name
      cy.modelDetailFindMakeName()

      //find specification
      cy.modelDetailFindSpecification()

      //find vote section
      cy.modelDetailFindVotes()

      //comment field should not exist because it doesn't log in
      cy.idNotExists('comment')

    })
  })

})
