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
    const { events } = this.props;
    return (
      <ul className="EventList">
        {events.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;
