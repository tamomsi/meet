import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { InfoAlert, ErrorAlert, WarningAlert } from './Alert';
import CityEventsChart from './CityEventsChart';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    infoAlertText: '',
    errorAlertText: '', // New state for the error alert text
    warningAlertText: '',
  };

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      let locationEvents = events;
      if (location && location !== 'all') {
        locationEvents = events.filter((event) => event.location === location);
      }
      const limitedEvents = locationEvents.slice(0, eventCount || this.state.numberOfEvents);
      this.setState({
        events: limitedEvents,
        numberOfEvents: eventCount || this.state.numberOfEvents,
      });
    });
  };

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  async componentDidMount() {
    const events = await getEvents();
    if (!this.isUnmounted) {
      this.setState({
        events: events.slice(0, this.state.numberOfEvents - 1),
        locations: extractLocations(events),
        warningAlertText: navigator.onLine ? '' : 'You are currently offline. Event data may not be up to date.',
      });
    }
  }

  handleInputChanged = (inputValue) => {
    this.setState({
      infoAlertText: inputValue,
      warningAlertText: '', // Clear the warning alert text when input changes
    });
  };

  handleError = (errorMessage) => {
    this.setState({
      errorAlertText: errorMessage,
    });
  };

  render() {
    const { locations, events } = this.state;
    return (
      <div className="App">
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
          onError={this.handleError} // Pass onError prop
        />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          onInputChanged={this.handleInputChanged}
        />
        <div className="alerts-container">
          {this.state.infoAlertText && <InfoAlert text={this.state.infoAlertText} />}
          {this.state.errorAlertText && <ErrorAlert text={this.state.errorAlertText} />}
          {this.state.warningAlertText && <WarningAlert text={this.state.warningAlertText} />}
        </div>
        <div className="charts-container">
        <CityEventsChart allLocations={locations} events={events} />
        </div>
        <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents} />
      </div>
    );
  }
}

export default App;