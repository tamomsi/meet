import React, { Component } from 'react';
import { getEvents } from './api';
import { ErrorAlert } from './Alert'; // Import ErrorAlert

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    events: [],
    mounted: false,
    errorAlertText: '', // New state for the error alert text
  };

  async componentDidMount() {
    this.setState({
      mounted: true
    });
    const events = await getEvents();
    if (this.state.mounted) {
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
    if (this.state.mounted) {
      this.setState({
        events: events.slice(0, numberOfEvents),
      });
    }
    return events.slice(0, numberOfEvents);
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value <= 0 || isNaN(value)) { // Check for invalid input
      this.setState({
        errorAlertText: 'Please enter a valid number of events.',
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorAlertText: '', // Clear error alert text
      });
      this.props.updateEvents(null, value);
    }
  };

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
        {this.state.errorAlertText && <ErrorAlert text={this.state.errorAlertText} />}
        <ul className="AmountOfEvents"></ul>
      </div>
    );
  }
}

export default NumberOfEvents;
