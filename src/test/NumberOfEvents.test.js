import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { jest } from '@jest/globals';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper, mockUpdateEvents;
  
  beforeAll(() => {
    mockUpdateEvents = jest.fn();
    NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={32} updateEvents={mockUpdateEvents} />);
  });

  test('render number of events input', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents input')).toHaveLength(1);
  });

  test('render label for number of events input', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents label')).toHaveLength(1);
    expect(NumberOfEventsWrapper.find('.NumberOfEvents label').text()).toEqual('Number of Events:');
  });

  test('render number of events input with default value', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.NumberOfEvents input').prop('value')).toEqual(numberOfEvents);
  });

  test('update number of events state when input changes', () => {
    const eventObject = { target: { value: 20 } };
    NumberOfEventsWrapper.find('.NumberOfEvents input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(20);
  });

  test('update events state in App component when input changes', () => {
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.NumberOfEvents input').simulate('change', eventObject);
    expect(mockUpdateEvents).toHaveBeenCalledWith(null, 10);
  });  

  test('get data from API', async () => {
    const mockEvents = mockData;
    const returnedEvents = await NumberOfEventsWrapper.instance().getEvents();
    expect(returnedEvents).toEqual(mockEvents);
  });

  test('get data from API when URL starts with "http://localhost"', async () => {
  const mockEvents = mockData;
  window.location.href = 'http://localhost';
  const returnedEvents = await NumberOfEventsWrapper.instance().getEvents();
  expect(returnedEvents).toEqual(mockEvents);
  });
});
