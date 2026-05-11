Feature:Login functionality
@e2e
Scenario: end to end scenario
Given user is on application login page
When user enters  username and password
And user add product to cart and click on checkout 
And fill the data for checkout and click continue
And click on finish button
Then user should see the confirmation messsage
