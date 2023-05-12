import { mount } from "enzyme";
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn\'t specified a number, 32 is the default number.', 
      ({ given, when, then }) => {
        let AppWrapper;
        given('the user has opened the app', () => {
          AppWrapper = mount(<App />);
        });
  
        when('the user views the events list', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            NumberOfEventsWrapper.find(".event").simulate("change");
         
        });
  
        then(/^the default number of events displayed should be (\d+)$/, (arg0) => {
          AppWrapper.update();
          expect(AppWrapper.find(".event")).toHaveLength(33);
        });
    });
  
    test('User can change the number of events they want to see.', ({ given, when, and, then }) => {
      let AppWrapper;
      const numberOfEvents = Math.floor(Math.random() * 32) + 1;
      given('the user has opened the app', () => {
        AppWrapper = mount(<App />);
        AppWrapper.update();
      });
  
      when('the user views the events list', () => {
        AppWrapper.setState({ numberOfEvents: 32 });
      });
  
      and('the user specifies a different number of events', () => {
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.find('.event').simulate('change', { target: { value: 32 } });
      });
  
      then('the number of events displayed should match the user\'s input', () => {
        AppWrapper.update();
        expect(AppWrapper.state("numberOfEvents")).toEqual(32);

      });
    });
  });
  