$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("hotmailloginpage/hotmailloginpage.feature");
formatter.feature({
  "line": 1,
  "name": "Hotmail Login",
  "description": "",
  "id": "hotmail-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 99203100,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Hotmail Login",
  "description": "",
  "id": "hotmail-login;hotmail-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on \"http://hotmail.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click the Sign In button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter the User Name \"abc@hotmail.com\" on \"i0116\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click the button \"idSIButton9\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter the password \"odsjsjdskd\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the sign in button \"idSIButton9\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://hotmail.com",
      "offset": 9
    }
  ],
  "location": "hotmailloginpagesteps.I_am_on(String)"
});
formatter.result({
  "duration": 3309850400,
  "status": "passed"
});
formatter.match({
  "location": "hotmailloginpagesteps.I_click_the_Sign_In_button()"
});
formatter.result({
  "duration": 742205600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@hotmail.com",
      "offset": 23
    },
    {
      "val": "i0116",
      "offset": 44
    }
  ],
  "location": "hotmailloginpagesteps.I_enter_the_User_Name_on(String,String)"
});
formatter.result({
  "duration": 145062200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "idSIButton9",
      "offset": 20
    }
  ],
  "location": "hotmailloginpagesteps.I_click_the_button(String)"
});
formatter.result({
  "duration": 3084997000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "odsjsjdskd",
      "offset": 22
    }
  ],
  "location": "hotmailloginpagesteps.I_enter_the_password(String)"
});
formatter.result({
  "duration": 121863200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "idSIButton9",
      "offset": 28
    }
  ],
  "location": "hotmailloginpagesteps.I_click_the_sign_in_button(String)"
});
formatter.result({
  "duration": 312613700,
  "status": "passed"
});
formatter.match({
  "location": "hotmailloginpagesteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 728722800,
  "status": "passed"
});
});