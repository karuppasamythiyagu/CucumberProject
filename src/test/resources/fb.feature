@feature02 @feature01
Feature: To validate the login functionality of facebook

  Background: 
    Given To launch the chrome browser and hit the facebook url

  @smoke @sanity
  Scenario: To validate invaild username and invaild password
    When To pass the invaild user name to username text box
      | email1 | sinamika123@gmail.com        |
      | email2 | karuppasamythiyagu@gmail.com |
      | email3 | mugesh123@gmail.com          |
      | email4 | kanna@gmail.com              |
    And To pass the invaild password to password text box
    
      | password1   | password2   | password3 |
      |      123456 |     7654321 |   2345678 |
      | java        | selenium    | cucumber  |
      | testng      | datatable   | pom       |
      | inheritance | abstraction | opps      |

   And user has to click the continue button
   Then user has to close the browser
  
  @sanity @regression
  Scenario Outline: To validate the bulk of datas
    When user has to pass the bulk"<userName>" of datas to userName field
    And user has to pass the bulk "<password>"of datas to password field
    Then user has to close the browser

    Examples: 
      | userName                  | password        |
      | karuppasamy1798@gmail.com | karuppasamy1798 |
      | ajsamy2156@gmail.com      | ajsamy2156      |
      | testng@gmail.com          | testng          |
      | cucumber@gmail.com        | cucumber        |
