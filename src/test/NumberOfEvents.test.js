import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import { getEvents } from '../api';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
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
