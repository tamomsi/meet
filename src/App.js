import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents  } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
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
        events,
        locations: localStorage.getItem('locations')
          ? JSON.parse(localStorage.getItem('locations'))
          : [],
      });
    }
  }

  render() {
    return (
      <div className="App">
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents} />

      </div>
    );
  }
}

export default App;
