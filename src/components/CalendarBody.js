import React from 'react';

const CalendarBody = ({ year, month, daysInMonth }) => {
    const firstDay = new Date(year, month, 1).getDay();
    const dayList = [];
    for (let i = 0; i < firstDay; i++) {
        dayList.push({dayNum: '', events: {}});
    }

    return (
        <tbody>
            {firstDay}
        </tbody>
    );
};

export default CalendarBody;
