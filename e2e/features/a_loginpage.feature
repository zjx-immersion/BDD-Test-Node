  Feature: Loginpage
  As a user who loves art website
  I want to login art.com
  So that I can operate this website

  Scenario: Login the website
    Given I am visiting the website
    When I input in username "admin" and password "pass" then click login button
    Then I should see the main page that title is "My todos"

