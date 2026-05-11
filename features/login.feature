Feature:Login functionality
@Validation
Scenario: Valid Login
Given user is on loginpage
When user enters valid username and password
Then user should see inventorypage

Scenario:Invalid Login
Given user is on loginpage
When user enters Invalid username "user1" and password "pass1"
Then user should see error message

