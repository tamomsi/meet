import React, { Component } from 'react';
import { getEvents } from './api';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    events: [],
    mounted: false // add mounted property to state
  };

  async componentDidMount() {
    this.setState({
      mounted: true // set mounted to true when component is mounted
    });
    const events = await getEvents();
    if (this.state.mounted) { // check if component is still mounted before setting state
      this.setState({
        events,
      });
    }
  }

  componentWillUnmount() {
    this.setState({ mounted: false });
  }

  async getEvents() {
    const { numberOfEvents } = this.state;
    const events = await getEvents();
    if (this.state.mounted) { // check if component is still mounted before setting state
      this.setState({
        events: events.slice(0, numberOfEvents),
      });
    }
    return events.slice(0, numberOfEvents);
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
