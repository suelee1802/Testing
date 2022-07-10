/*
  Scenario : user can move to main page by clicking logo name on the top

  GIVEN user doesn't log in
   WHEN user move to model detail page
   THEN user can see comments
   * Date
   * Author
   * Comment


  Comment only possible when log in, so every comment should have its author.
  Due to the time limit, check 10 comments from top.
*/

describe('brand & model detail page shows comment list', () => {
  var models = [
    {
      make : "c4u1mqnarscc72is013g",
      brand : "7Cc4u1mqnarscc72is0160"
    },
    {
      make : "c4u1mqnarscc72is00ng",
      brand : "7Cc4u1mqnarscc72is00r0"
    },
  ]

  beforeEach(() => {
    cy.visit('/')
  })

  models.forEach((model, index) => {

    it(`${model.make} > ${model.brand} shows author`, () => {

      cy.visit(`/model/${model.make}%${model.brand}`)

      //find comment table
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
