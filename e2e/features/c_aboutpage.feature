  Feature: aboutpage
  As a user who want to go into about page
  I want to view the clients' table view
  So that I can add client to this table

  Scenario Outline: Manage the client's table view
    Given I am visiting the about page that title is "Client List"
    When I click the add item button:
      | name  | age | sex |
      | Aslak | 12 | Male   |
      | Matt  | 23  | Female   |
      | Joe   | 32  | Male   |
    And input the name <name>, age <age>
    And choose the sex <sex>
    And click the ok button
    Then I should see the table view's count is 6
    Examples:
      | name | age | sex |
      | zjx |  26  |  Male  |



