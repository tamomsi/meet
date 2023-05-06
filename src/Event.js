import React, { useState } from 'react';

function Event({ event }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="event">
      <div className="event-basic-info">
        <h2 className="event-name">{event.summary}</h2>
        <p className="event-date-time">{event.start.dateTime}</p>
        <p className="event-location">{event.location}</p>
      </div>
      {showDetails && (
        <div className="event-details">
          <h2>Details</h2>
          <div dangerouslySetInnerHTML={{ __html: event.description }} />
        </div>
      )}
      <button className="details-btn" onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
}

export default Event;