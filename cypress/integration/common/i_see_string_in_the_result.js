import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the result`, (title) => {
  // cy.title().should('include', title)
  cy.xpath('(//div[@id="search"]//a)[1]/h3').contains(title)
})