Feature: Login Section

  @Regression @Complete @UI  @Automated 
  Scenario Outline: Login with valid credentials
    Given user is on Login page
    When user enters the user <email> in the Email Input field
    And user enters the user <password> in the Password Input field
    And user clicks Login button
    Then user should navigate to homepage with authorization access

    Examples:
      | email         | password         |
     # | PATIENT_EMAIL | PATIENT_PASSWORD |
     | DOCTOR_EMAIL  | DOCTOR_PASSWORD  |
  
  # @Regression @Complete @UI  @Automated
  # Scenario Outline: Login with invalid credentials
  #   Given user is on Login page
  #   When user enters the user <email> in the Email Input field
  #   And user enters the user <password> in the Password Input field
  #   And user clicks tst button
  #   #Then user should see the message "Mobile Number/Email or password is incorrect. Please try again."

  #   Examples:
  #     | email         | password           |
  #     | INVALID_EMAIL  | INVALID_PASSWORD  |


      
    