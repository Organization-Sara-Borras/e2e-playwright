Feature: Login SauceLabs

  Scenario: Login with valid username and password
    Given the user is on sauceLabs login page
    When the user fill username with "standar_user"
    And the user fill password with "secret_sauce"
    And the user press login button
    And the user should see products page

    
    