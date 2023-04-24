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

1. As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

__Scenario:__ An event element is collapsed by default<br>
  __Given__ an event element with collapsed details<br>
  __When__ the element is displayed<br>
  __Then__ the element should show only basic event information

__Scenario:__ User can expand an event to see its details<br>
  __Given__ an event element with basic information displayed<br>
  __When__ the "Show Details" button or icon is clicked<br>
  __Then__ the element should expand to show event details

__Scenario:__ User can collapse an event to hide its details<br>
  __Given__ an event element with expanded details displayed<br>
  __When__ the "Hide Details" button or icon is clicked<br>
  __Then__ the element should collapse to show only basic event information<br>

2. As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

__Scenario:__ When user hasn't specified a number, 32 is the default number<br>
  __Given__ an events list element<br>
  __When__ the element is displayed<br>
  __Then__ the element should show up to 32 events

__Scenario:__ User can change the number of events they want to see<br>
  __Given__ an events list element<br>
  __When__ the user specifies a different number of events to view<br>
  __Then__ the element should show up to the specified number of events


3. As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

__Scenario:__ Show cached data when there's no internet connection<br>
  __Given__ an app element<br>
   the app has cached data available<br>
  __When__ the app is launched without an internet connection<br>
  __Then__ the app should display the cached data

__Scenario:__ Show error when user changes the settings (city, time range)<br>
  __Given__ an app element<br>
  And the app is launched without an internet connection<br>
  __When__ the user attempts to change the city or time range settings<br>
  __Then__ the app should display an error message


4. As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

__Scenario:__ Show a chart with the number of upcoming events in each city<br>
  __Given__ an events data element<br>
  __When__ the app is launched and events data is available<br>
  __Then__ the element should display a chart showing the number of upcoming events in each city


## Use of Serverless functions

In my Meet App I will be using a serverless function (also known as FaaS), which offers several advantages, such as not having to manage my own server, only paying for the resources I use, and autoscale being included by default.

To use a serverless function in my app, I will write the code for the function and then deploy it on a FaaS platform, Amazon Web Services (AWS) Lambda, which allows me to upload my code and set up triggers for when the function should be executed.

In the Meet app I will use a serverless function to handle user authentication or to process and store user data. By using a FaaS platform, I do not need to worry about managing the server infrastructure or paying for unused resources. Instead, I can focus on writing and deploying my app code, while the FaaS platform handles the scaling and execution of my serverless functions.





