import React from 'react';

const EventPreview = ({ event }) => {
    return (
        <>
            {event["type"] === 'event' && <li>{event['title']}</li>}
        </>
    );
};

export default EventPreview;
