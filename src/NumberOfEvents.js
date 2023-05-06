import React, { Component } from 'react';
import NProgress from 'nprogress';
import { mockData } from './mock-data';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    events: [],
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  };

  getEvents = async () => {
    NProgress.start();

    if (window.location.href.startsWith("http://localhost")) {
      NProgress.done();
      return mockData;
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="event"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChange}
        />
        <ul className="AmountOfEvents">
        </ul>
      </div>
    );
  }
}

export default NumberOfEvents;
