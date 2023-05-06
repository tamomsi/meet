import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = mount(<NumberOfEvents updateEvents={() => {}} />);
  });

  test('render number of events input', () => {
    expect(NumberOfEventsWrapper.find('.event')).toHaveLength(1);
  });

  test('render correct number of events', () => {
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });

  test('change number of events when input changes', () => {
    const eventObject = { target: { value: 15 } };
    NumberOfEventsWrapper.find('.event').simulate('change', eventObject);
    NumberOfEventsWrapper.update();
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(15);
  });

  test('get correct number of events from mock API', async () => {
    const returnedEvents = await NumberOfEventsWrapper.instance().getEvents();
    expect(returnedEvents).toEqual(mockData.slice(0));
  });
});

describe('<App /> integration with NumberOfEvents', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = mount(<App />);
  });

  test('update number of events when user changes input', async () => {
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const eventObject = { target: { value: 1 } };
    const numberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    numberOfEventsWrapper.find('.event').simulate('change', eventObject);
    expect(AppWrapper.state('numberOfEvents')).toBe(1);
    const eventCount = mockData.length;
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(mockData.slice(0, eventCount));
  });

  test('render the correct number of events after user changes input', async () => {
    const eventObject = { target: { value: 1 } };
    const numberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    numberOfEventsWrapper.find('.event').simulate('change', eventObject);
    AppWrapper.update();
    const eventCount = mockData.slice(0, 1).length;
    expect(AppWrapper.find('.Event')).toHaveLength(eventCount);
  });
});
