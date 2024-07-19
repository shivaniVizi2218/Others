Feature: Validating website Automation Practice Site

    Scenario: Validate Home Page 
        Given I am on the website main Page
        When I click on Shop menu
        And I click on Home
        Then I should see three arrivals only
        Then I click on an image
        Then it should navigate to the next Page
        Then I should be able to add it to basket 