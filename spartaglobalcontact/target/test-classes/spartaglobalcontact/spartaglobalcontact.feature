Feature: Sparta Global Contact Us Page
Scenario: Sparta Global Contact Us Page

Given I am on the sparta global contact us page "https://www.spartaglobal.com/contact/"
And I enter my first name "contactFirstName"
And I enter my last name "contactLastName"
And I enter my company name "contactCompany"
And I enter my email address "contactEmail"
And I enter my telephone number "contactTelephone"
And I enter my contact message "contactMessage"
When I click the submit button "//*[@id='contact-form']/div[2]/button"
Then I should see the thank you message displayed