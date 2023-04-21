# Meet App - A Progressive Web Application

Meet App is a serverless, progressive web application (PWA) built with React, which allows users to search for events happening in a specific city. The app uses the Google Calendar API to fetch upcoming events and provides users with various features such as offline support, push notifications, add-to-home-screen prompt, and responsive design.

## Objective

The objective of this project is to develop a serverless, PWA with a TDD approach to ensure high-quality code and adequate test coverage. The app uses the Google Calendar API to fetch events and visualizes data in the form of charts. The primary goal is to develop an app that is highly scalable, always available, and provides a great user experience.

## Context
Serverless and PWAs have gained immense popularity in recent years and are considered the future of web development. Combining these two concepts enables the app to work as a normal web application while reaping the benefits of both serverless architecture and PWAs. Serverless architecture eliminates the need for backend maintenance, is easy to scale, always available, and has no cost for idle time. PWAs provide instant loading, offline support, push notifications, add-to-home-screen prompt, responsive design, and cross-platform compatibility.

The TDD approach requires writing tests before writing the actual functionality of the app in code. Writing tests forces developers to focus on the requirements of the application before jumping into the code, providing immediate feedback and delivering high-quality code.

Data visualization is an integral part of the app, with two charts showing the number of upcoming events by city and the popularity of event genres in the form of a pie chart.

## Features and Requirements

The key features of Meet App include:

* Filter events by city
* Show/hide event details
* Specify the number of events
* Use the app when offline
* Add an app shortcut to the home screen
* View a chart showing the number of upcoming events by city.

## User Stories:
1. As a user, I would like to be able to filter events by city so that I can see the list of events that
take place in that city.

__Scenario:__ Filter events by city
given I am on the main page.<br>
__When__ I type "Amsterdam" into the search bar
and I click the search button.<br>
__Then__ I should see a list of events in Amsterdam
and each event in the list should have "Amsterdam" as its location.

2. As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

__Scenario:__ Show/hide event details
given I am on the main page.<br>
__When__ I click on the details button of an event.<br>
__Then__ I should see more information about the event
and the details button should change to hide details.<br>
__When__ I click on the hide details button of an event.<br>
__Then__ I should see less information about the event
and the hide details button should change back to details.

3. As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

__Scenario:__ Specify the number of events to view
given I am on the main page. <br>
__When__ I select "5" from the events per page dropdown. <br>
__Then__ I should see a list of 5 events
and the number of events in the list should be 5. <br>
__When__ I select "10" from the events per page dropdown. <br>
__Then__ I should see a list of 10 events
and the number of events in the list should be 10. 

4. As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

__Scenario:__ Use the app when offline
given I am on the main page and I have an internet connection.<br>
__When__ I view a list of events.<br>
__Then__ the list of events should be cached
and I should be able to view the list of events when I am offline.<br>
__When__ I try to search for events without an internet connection.<br>
__Then__ I should see a message that I am offline and cannot search for events.

5. As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

__Scenario:__ Add app shortcut to home screen,
given I am on the main page on a mobile device.<br>
__When__ I click on the "Add to Home Screen" button.<br>
__Then__ the app should be added to my home screen
and I should be able to open the app directly from my home screen.

6. As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

__Scenario:__ See a chart showing upcoming events in each city,
given I am on the main page.<br>
__When__ I click on the "View Chart" button.<br>
__Then__ I should see a chart showing the upcoming events in each city
and the chart should be updated based on my search results.<br>
__When__ I search for events in a different city.<br>
__Then__ the chart should update to show the upcoming events in the new city.







