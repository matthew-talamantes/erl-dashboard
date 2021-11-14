import React from 'react';

const EventPreview = ({ event }) => {
    return (
        <>
            <li>{event['title']}</li>
        </>
    );
};

export default EventPreview;
