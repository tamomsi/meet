import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import { jest } from '@jest/globals';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper, mockUpdateEvents;
  
  beforeAll(() => {
    mockUpdateEvents = jest.fn();
    NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={32} updateEvents={mockUpdateEvents} />);
  });

  afterAll(() => {
    NumberOfEventsWrapper.unmount();
  });

  test('render number of events input', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents input')).toHaveLength(1);
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

  test('render number of events input with default value', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.NumberOfEvents input').prop('value')).toEqual(numberOfEvents);
  });

  test('update events state in App component when input changes', () => {
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.NumberOfEvents input').simulate('change', eventObject);
    expect(mockUpdateEvents).toHaveBeenCalledWith(null, 10);
  });

  test('get data from API when URL starts with "http://localhost"', async () => {
    window.location.href = 'http://localhost'; // set the window location
    const returnedEvents = await NumberOfEventsWrapper.instance().getEvents(); // call the getEvents function
    expect(returnedEvents).not.toBeNull(); // check if the returned data is not null
    expect(returnedEvents.length).toBeGreaterThan(0); // check if the returned data is not empty
  });
  
  
});

