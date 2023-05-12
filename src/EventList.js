import React, { Component } from 'react';
import Event from './Event';
import { getEvents } from './api';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    this.isUnmounted = false;
  }

  async componentDidMount() {
    const events = await getEvents();
    if (!this.isUnmounted) {
      this.setState({ events });
    }
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  render() {
    const { events, numberOfEvents} = this.props;
    return (
      <ul className="EventList">
        {events.slice(0, numberOfEvents).map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;
