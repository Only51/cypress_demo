# cypress_demo
Initial example of using Cypress with Cucumber.

# Run example tests

```
npm install
npm test
```  

### Examples:

There are a few tagged tests in these files:

[Google.feature]
```
Feature: Google Main Page

  I want to open a search engine
  
  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title

```

###### Simple Example
  Run ```cypress run --spec "**/*.feature"``` in this project. `Google.feature` will be executed, the result should be: 
  
  ```
      Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  Google.feature                           00:06        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:06        1        1        -        -        -  
```

