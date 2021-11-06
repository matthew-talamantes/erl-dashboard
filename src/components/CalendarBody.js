import React from 'react';

const CalendarBody = ({ year, month, daysInMonth }) => {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month, daysInMonth).getDay();
    const buildCalArray = () => {
        const dayList = [];
        for (let i = 0; i < firstDay; i++) {
            dayList.push({dayNum: '', events: []});
        }

        for (let i = 1; i < daysInMonth; i++){
            dayList.push({dayNum: i, events: []});
        }

        if (lastDay < 6) {
            const trailingDays = 6 - lastDay;
            for (let i = 0; i < trailingDays; i++){
                dayList.push({dayNum: '', events: []});
            }
        }
    
    };
    

    return (
        <tbody>
            {}
        </tbody>
    );
};

export default CalendarBody;
