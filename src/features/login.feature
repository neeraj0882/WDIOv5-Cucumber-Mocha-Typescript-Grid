Feature: Performing Login on a sample page

    As a user I want to Login to a sample page

    Background:

        Given I am on the login page

    Scenario: Perfor a login operation
        When I enter username and password
        Then I should see a correct login message