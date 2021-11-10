import React from 'react';

const CalendarDay = ({ dayNum, events}) => {
    return (
        <td className="calendar-day">
            <h4>{dayNum}</h4>
            <ul>
                {events.map((event)=>(
                    {event && `<li>${event[title]}</li>`}
                ))}
            </ul>
        </td>
    );
};

CalendarDay.defaultProps = {
    events: []
};

export default CalendarDay;
