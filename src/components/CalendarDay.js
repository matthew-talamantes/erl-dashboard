import React from 'react';

const CalendarDay = ({ dayNum, events}) => {
    return (
        <td className="calendar-day">
            <h4>{dayNum}</h4>
            <ul>
                {events.foreach((event)=>{
                    <li>event[title]</li>
                })}
            </ul>
        </td>
    );
};

export default CalendarDay;
