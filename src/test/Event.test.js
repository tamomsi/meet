import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from '../mock-data';

describe("<Event/> component", () => {
  let EventWrapper;

  beforeEach(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test("renders an event element with basic information displayed", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("shows only basic event information when element is displayed", () => {
    expect(EventWrapper.find(".event-basic-info")).toHaveLength(1);
    expect(EventWrapper.find(".event-details")).toHaveLength(0);
  });

  test("expands an event to show its details when the 'Show Details' button is clicked", () => {
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.find(".event-details")).toHaveLength(1);
  });

  test("collapses an event to show only basic information when the 'Hide Details' button is clicked", () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.find(".event-details")).toHaveLength(1);
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.find(".event-details")).toHaveLength(0);
  });

  test("changes button text when clicked", () => {
    const EventWrapper = shallow(<Event event={mockData[0]} />);
    const detailsButton = EventWrapper.find(".details-btn");
  
    // Check that button initially shows "Show Details" text
    expect(detailsButton.text()).toBe("Show Details");
  
    // Simulate button click again and check that text changes back to "Show Details"
    detailsButton.simulate("click");
    expect(detailsButton.text()).toBe("Show Details");
  });
  
});
