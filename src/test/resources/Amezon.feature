@feature01
Feature: To validate the Amezon login functionality

   @sanity
  Scenario: To validate the invaild Emaild and invaild password
    Given user has to launch the chromebrowser and hit the Amezon url
    When user has to pass the invaild emailId to userName text box
    And  To click the continue button 
    And user has to pass the invaild password to password text box
    And user has to click the sign button
    
