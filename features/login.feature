# ./features/login.feature

Feature: Signin on Arkademy website
    As a user
    I want to be able to Log In

    @success
    Scenario: Log in on Arkademy Website
        Given user browse login page
        And user fill email field
        And user fill password field
        When user click login button
        Then user can see dashboard page

