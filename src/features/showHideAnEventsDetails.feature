Feature: Show/hide an event details

Scenario: An event element is collapsed by default
  Given the user navigates to the event page
  Then the event element should be collapsed by default

Scenario: User can expand an event to see its details
  Given all the events are loaded by default
  When the user clicks on an event element
  Then the event details should be visible

Scenario: User can collapse an event to hide its details
  Given the user has expanded an event to see its details
  When the user clicks on the event element again
  Then the event details should be hidden
