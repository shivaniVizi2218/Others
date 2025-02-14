Feature: Login Page Automation of Saucedemo App

#Scenario: Check login is successful with valid credentials
#Given User is on login page
#When User enters valid username and password
#And Clicks on login button
#Then User should be navigated to home page
#And Close the browser

#Scenario Outline: Check login with different users credentials
#Given User is on login page
#When User enters "<username>" and "<password>"
#And Clicks on login button
#Then User should be navigated to home page
#And Close the browser

#Examples:
#| username | password |
#| standard_user | secret_sauce |
#| locked_out_user | secret_sauce |
#| problem_user | secret_sauce |
#| performance_glitch_user | secret_sauce |

Scenario Outline: Check login with Valid user credentials
Given User is on login page
When User enters "<username>" and "<password>"
And Clicks on login button
Then User should be navigated to home page
And Close the browser

Examples:
| username | password |
| standard_user | secret_sauce |
