import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import survey from "../../Pages/SurveyPage";

const url = 'https://raksul.github.io/recruit-qa-engineer-work-sample/'
Given('I am on the survey page', () => {
  cy.visit(url)
})

When('I enter survey information {string}, {string}, {string}, {string}, {string}, {string}, and {string}', (email, lname, fname, hearAboutUs, servicesOfInterest, association, explaination) => {
  
  survey.inputSurveyInfos(email, lname, fname, hearAboutUs, servicesOfInterest, association, explaination);

});

And('I submit the survey form', () => {
  survey.clickSubmitButton();
});

Then('I should see a success message', () => {
  survey.verifySuccessMessage();
});

Then('I should see an error message', () => {
  survey.verifyErrorMessage();
});
