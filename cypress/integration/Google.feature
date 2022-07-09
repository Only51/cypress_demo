Feature: Google Main Page

  I want to open a search engine
  
  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    When I search for "Behavior Driven"
    Then I see "BDD" in the result