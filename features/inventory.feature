Feature: Inventory Page
Scenario: Verify inventory items count inventory items for different users
Given user is on application loginpage
When user logs in with username "<username>" and pasword "<password>"
Then user should see  "<result>"
And inventory item count should be "<count>"

Examples:
    | username       | password      | result          | count |
    | standard_user  | secret_sauce  | inventory page  | 6     |
    | problem_user   | secret_sauce  | inventory page  | 6     |
    |locked_out_user | secret_sauce  | error message   | 0     |
