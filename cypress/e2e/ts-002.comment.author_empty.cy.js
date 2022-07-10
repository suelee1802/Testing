/// <reference types="cypress" />

/*
  Scenario : user can move to main page by clicking logo name on the top

  GIVEN user doesn't log in
   WHEN user move to model detail page
   THEN user can see comments
   * Date
   * Author
   * Comment


  Comment only possible when log in, so every comment should have its author.
  Due to the waiting time, check 10 comments from top.
  sample data : 1st pass,2nd fail(Alfa Romeo>Mito)
*/

describe('brand & model detail page shows comment list', () => {
  var models = [
    {
      makeId : "c4u1mqnarscc72is013g",
      makeName : "Lancia",
      brandId : "7Cc4u1mqnarscc72is0160",
      brandName : "Rally 037"
    },
    {
      makeId : "c4u1mqnarscc72is00ng",
      makeName : "Alfa Romeo",
      brandId : "7Cc4u1mqnarscc72is00r0",
      brandName : "Mito"
    },
  ]

  beforeEach(() => {
    cy.visit('/')
  })

  models.forEach((model, index) => {

    it(`${model.makeName} > ${model.brandName} shows author`, () => {

      cy.buggyCarVisit(`/model/${model.makeId}%${model.brandId}`)
        .currentLocation(`/model/${model.makeId}%${model.brandId}`)

      //find comment cloumn empty
      cy.get('.table>tbody>tr')
        .each((comment, index)=>{

          if (index > 10) {
            return
          } else {
            cy.wrap(comment).find('td:first')
              .next()
              .should('not.be.empty')
          }
        })
    })
  })

})
