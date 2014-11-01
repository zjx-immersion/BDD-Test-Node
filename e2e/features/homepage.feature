Feature: Homepage
  As a user who loves movies
  I want to visit trailers.com
  So that I can browse trailers

  Scenario: Visiting homepage
    Given I am visiting the homepage
    When I click that green button
    Then I should see "protractor-cucumber-example" as the page title

