Feature: Homepage
  As a user who want to manage his todo list
  I want to vist todo page
  So that I can view my todo list

  Scenario: add the todo item to todo list
    Given I am visiting the home Page
    When I input in todo item "admin"
    And I click the add button
    Then I should see the todo list count is 1
    And delete the new item so that the todo list count is 0

