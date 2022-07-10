/// <reference types="cypress" />

/*
  Scenario : logged in user try to update additional info, and Gender/Age field should be proper data format

  GIVEN user login Buggy Cars Rating
    AND user click profile menu
   WHEN user select Gender field
    AND type 'abc'
   THEN the Gender field should not allow if not 'Male' or 'Female'
    AND the Gender field should be empty
    AND the user type Age
   THEN the Age field should only allow number, so it should be empty
*/

describe('user try to update profile', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.mainPagelogin('suelee', 'Test1234!')
  })

  it('user update Additional Info - data type should match', () =>{
    cy.mainPageFindNavMenu('Profile')
    cy.currentLocation('/profile',true)

    cy.get('#genders option').should('have.length',2)

    //type text not in the datalist -> should be empty
    cy.profileTypeValueByName('gender', 'abc')
    cy.profileCompareValueByName('gender', '')

    cy.profileTypeValueByName('age', 'abc')
    cy.profileCompareValueByName('age', '')
  })

})