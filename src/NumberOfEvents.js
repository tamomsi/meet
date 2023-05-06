import React, { Component } from 'react';
import NProgress from 'nprogress';
import { mockData } from './mock-data';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    events: [],
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    this.props.updateEvents(null, value);
  }

  getEvents = async () => {
    NProgress.start();

    if (window.location.href.startsWith("http://localhost")) {
      NProgress.done();
      return mockData;
    }
  };

  render() {
    return (
      <div className='NumberOfEvents'>
        <label htmlFor='numberOfEvents'>Number of Events:</label>
        <input
          type='number'
          id='numberOfEvents'
          className='event'
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
