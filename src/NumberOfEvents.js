import React, { Component } from 'react';
import { getEvents } from './api';

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
        <ul className="AmountOfEvents">
          </ul>
      </div>
    );
  }
}

export default NumberOfEvents;