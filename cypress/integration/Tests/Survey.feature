
Feature: User Survey

  Scenario Outline: User can submit with valid information
    Given I am on the survey page
    When I enter survey information "<email>", "<lname>", "<fname>", "<hearAboutUs>", "<servicesOfInterest>", "<association>", and "<explaination>"
    And I submit the survey form
    Then I should see a success message

    Examples:
      | email                   | lname     | fname     | hearAboutUs       | servicesOfInterest | association | explaination |
      | valid_email@example.com | Dat       | Pham      | Search engines    | Printing,Advertisement           | Prospect    | Test_1       |
      | validemail1@example.com | David     | Nguyen    | Social media      | Logistics,Printing      | Partner     | Test_2       |

  Scenario Outline: User can not submit  with invalid information
    Given I am on the survey page
    When I enter survey information "<email>", "<lname>", "<fname>", "<hearAboutUs>", "<servicesOfInterest>", "<association>", and "<explaination>"
    And I submit the survey form
    Then I should see an error message

    Examples:
      | email                   | lname       | fname       | hearAboutUs       | servicesOfInterest | association | explaination   |
      | invalid_email           | {backspace} | {backspace} |                   |                    |             | {backspace}    |