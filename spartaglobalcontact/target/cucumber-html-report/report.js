$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("spartaglobalcontact/spartaglobalcontact.feature");
formatter.feature({
  "line": 1,
  "name": "Sparta Global Contact Us Page",
  "description": "",
  "id": "sparta-global-contact-us-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 176512600,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Sparta Global Contact Us Page",
  "description": "",
  "id": "sparta-global-contact-us-page;sparta-global-contact-us-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the sparta global contact us page \"https://www.spartaglobal.com/contact/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter my first name \"contactFirstName\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I enter my last name \"contactLastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter my company name \"contactCompany\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter my email address \"contactEmail\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter my telephone number \"contactTelephone\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter my contact message \"contactMessage\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the submit button \"//*[@id\u003d\u0027contact-form\u0027]/div[2]/button\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the thank you message displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.spartaglobal.com/contact/",
      "offset": 43
    }
  ],
  "location": "spartaglobalcontactsteps.I_am_on_the_sparta_global_contact_us_page(String)"
});
formatter.result({
  "duration": 5535654100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contactFirstName",
      "offset": 23
    }
  ],
  "location": "spartaglobalcontactsteps.I_enter_my_first_name(String)"
});
formatter.result({
  "duration": 334223400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contactLastName",
      "offset": 22
    }
  ],
  "location": "spartaglobalcontactsteps.I_enter_my_last_name(String)"
});
formatter.result({
  "duration": 161989600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contactCompany",
      "offset": 25
    }
  ],
  "location": "spartaglobalcontactsteps.I_enter_my_company_name(String)"
});
formatter.result({
  "duration": 173158700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contactEmail",
      "offset": 26
    }
  ],
  "location": "spartaglobalcontactsteps.I_enter_my_email_address(String)"
});
formatter.result({
  "duration": 171468000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contactTelephone",
      "offset": 29
    }
  ],
  "location": "spartaglobalcontactsteps.I_enter_my_telephone_number(String)"
});
formatter.result({
  "duration": 153680700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contactMessage",
      "offset": 28
    }
  ],
  "location": "spartaglobalcontactsteps.I_enter_my_contact_message(String)"
});
formatter.result({
  "duration": 589841700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "//*[@id\u003d\u0027contact-form\u0027]/div[2]/button",
      "offset": 27
    }
  ],
  "location": "spartaglobalcontactsteps.I_click_the_submit_button(String)"
});
formatter.result({
  "duration": 254025500,
  "status": "passed"
});
formatter.match({
  "location": "spartaglobalcontactsteps.I_should_see_the_thank_you_message_displayed()"
});
formatter.result({
  "duration": 105107100,
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat spartaglobalcontact.spartaglobalcontactsteps.I_should_see_the_thank_you_message_displayed(spartaglobalcontactsteps.java:99)\r\n\tat ✽.Then I should see the thank you message displayed(spartaglobalcontact/spartaglobalcontact.feature:12)\r\n",
  "status": "failed"
});
});