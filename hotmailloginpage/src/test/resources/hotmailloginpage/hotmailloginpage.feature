Feature:  Hotmail Login
Scenario: Hotmail Login

   Given I am on "http://hotmail.com"
   When I click the Sign In button
   And I enter the User Name "abc@hotmail.com" on "i0116"
   And I click the button "idSIButton9"
   And I enter the password "odsjsjdskd"
   And I click the sign in button "idSIButton9"
   Then I should be logged in