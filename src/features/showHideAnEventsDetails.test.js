import React, { useState } from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import Event from "../Event";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, then }) => {
    let AppWrapper;

    given('the user navigates to the event page', () => {
      AppWrapper = mount(<App />);
    });

    then('the event element should be collapsed by default', () => {
      expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;

    given('all the events are loaded by default', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on an event element', () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-btn").at(0).simulate("click");
    });

    then('the event details should be visible', () => {
      expect(AppWrapper.find(".event .event-details")).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let AppWrapper;

    given('the user has expanded an event to see its details', () => {
      const mockEvent = mockData[0];
      AppWrapper = mount(<Event event={mockEvent} />);
      AppWrapper.update();
      AppWrapper.find(".details-btn").simulate("click");
      expect(AppWrapper.find(".event-details")).toHaveLength(1);
    });

    when('the user clicks on the event element again', () => {
      AppWrapper.update();
      AppWrapper.find(".details-btn").simulate("click");
    });

    then('the event details should be hidden', () => {
      expect(AppWrapper.find(".event-details")).toHaveLength(0);
    });
  });
});
