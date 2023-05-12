Feature: View a specific number of events

Scenario: When user hasn't specified a number, 32 is the default number.
Given the user has opened the app
When the user views the events list
Then the default number of events displayed should be 32

Scenario: User can change the number of events they want to see.
Given the user has opened the app
When the user views the events list
And the user specifies a different number of events
Then the number of events displayed should match the user's input