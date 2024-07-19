Feature: Login Feature of OrangeHRM Website

Scenario: As I existing user, I can login the application
    When I am on the login page
    And I login the application with valid credentials
    Then I have to navigate to dashboard page