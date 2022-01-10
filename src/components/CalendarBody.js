import React from 'react';
import CalendarDay from './CalendarDay';

const CalendarBody = ({ year, month, daysOfMonth, events }) => {
    const buildCalArray = () => {
        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month, daysOfMonth).getDay();
        const dayList = [];
        for (let i = 0; i < firstDay; i++) {
            dayList.push('');
        }

        for (let i = 1; i <= daysOfMonth; i++){
            dayList.push(i);
        }

        if (lastDay < 6) {
            const trailingDays = 6 - lastDay;
            for (let i = 0; i < trailingDays; i++){
                dayList.push('');
            }
        }
        return dayList;
    };

    const buildWeekArray = (dayList) => {
        let dayOfWeek = 0;
        const weekArray = [];
        let tempList = [];
        for (let i = 0; i < dayList.length; i++) {
            if (dayOfWeek > 6) {
                weekArray.push(tempList);
                tempList = [];
                tempList.push(dayList[i]);
                dayOfWeek = 1;
            } else {
                tempList.push(dayList[i]);
                dayOfWeek++;
            }
        }
        weekArray.push(tempList);
        return weekArray;
    };

    const getDayEvents = (day) => {
        try {
            return events[day];
        } catch (e) {
            if (e instanceof TypeError) {
                return [];
            }
        }
    };

    const dayList = buildCalArray();
    const weekList = buildWeekArray(dayList);
    return (
        <tbody>
            <tr>
                <th className="cal-weekday-name border border-dark">Sunday</th>
                <th className="cal-weekday-name border border-dark">Monday</th>
                <th className="cal-weekday-name border border-dark">Tuesday</th>
                <th className="cal-weekday-name border border-dark">Wednesday</th>
                <th className="cal-weekday-name border border-dark">Thursday</th>
                <th className="cal-weekday-name border border-dark">Friday</th>
                <th className="cal-weekday-name border border-dark">Saturday</th>
            </tr>
            {weekList.map((week, weekIndex)=>(
                <tr key={weekIndex} >{week.map((day, dayIndex)=>(
                    <CalendarDay key={`${weekIndex}-${dayIndex}`} dayNum={day} events={getDayEvents(day)} />
                ))}</tr>
            ))}
        </tbody>
    );
};

CalendarBody.defaultProps = {
    events: {}
};

export default CalendarBody;
