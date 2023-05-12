import React, { Component } from 'react';
import { getEvents } from './api';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    events: [],
  };

  async getEvents() {
    const { numberOfEvents } = this.state;
    const events = await getEvents();
    this.setState({
      events: events.slice(0, numberOfEvents),
    });
    console.log("Number of events:", numberOfEvents);
    return events; // Add this line to return the events array
  }  

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