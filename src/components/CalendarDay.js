import React from 'react';
import EventPreview from './EventPreview';

const CalendarDay = ({ dayNum, events}) => {
    return (
        <td className="calendar-day border border-dark">
            <h4>{dayNum}</h4>
            <ul className="cal-event-list">
                {events.map((event)=>(
                    event["type"] === 'event' && <EventPreview key={event.title} event={event} />
                ))}
            </ul>
        </td>
    );
};

CalendarDay.defaultProps = {
    events: []
};

export default CalendarDay;
