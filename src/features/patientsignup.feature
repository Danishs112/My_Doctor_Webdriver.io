Feature: Patient Sign Up

  Scenario Outline: As a user, I want to sign up as patient

    Given I am on the patient signup page
    # When I login with <username> and <password>
    # Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |