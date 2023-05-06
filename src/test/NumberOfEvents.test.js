import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import NumberOfEvents from '../NumberOfEvents';
import App from '../App';
import EventList from '../EventList';

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
  });
  
