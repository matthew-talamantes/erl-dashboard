import React from 'react';
import EventPreview from './EventPreview';

const CalendarDay = ({ dayNum, events}) => {
    return (
        <td className="calendar-day border border-dark">
            <h4>{dayNum}</h4>
            <ul>
                {events.map((event)=>(
                    event["type"] === 'event' && <EventPreview event={event} />
                ))}
            </ul>
        </td>
    );
};

CalendarDay.defaultProps = {
    events: []
};

export default CalendarDay;
