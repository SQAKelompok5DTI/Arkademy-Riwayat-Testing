# ./features/login2.feature

Feature: Signin on Arkademy website
    As a user
    I want to be able to Log In

    @failed
    Scenario: Log in on Arkademy Website using wrong Email/Password
        Given user browse login page1
        And user fill email field1
        And user fill password field1
        When user click login button1
        Then user see login page and login failed notification
