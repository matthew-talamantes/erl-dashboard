import React from 'react';
import CalendarDay from './CalendarDay';

const CalendarBody = ({ year, month, daysOfMonth }) => {
    const buildCalArray = () => {
        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month, daysOfMonth).getDay();
        const dayList = [];
        for (let i = 0; i < firstDay; i++) {
            dayList.push({dayNum: '', events: []});
        }

        for (let i = 1; i < daysOfMonth; i++){
            dayList.push({dayNum: i, events: []});
        }

        if (lastDay < 6) {
            const trailingDays = 6 - lastDay;
            for (let i = 0; i < trailingDays; i++){
                dayList.push({dayNum: '', events: []});
            }
        }
        return dayList;
    };

    const buildWeekArray = (dayList) => {
        let dayOfWeek = 0;
        const weekArray = [];
        for (let i = 0; i < dayList.length; i++) {
            let tempList = [];
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
        return weekArray;
    };

    const dayList = buildCalArray();
    const weekList = buildWeekArray(dayList);
    console.log(weekList);
    return (
        <tbody>
            {weekList.map((week)=>{
                <tr>{week.map((day)=>{
                    
                    //<CalendarDay dayNum={day[dayNum]} events={day[events]} />
                })}</tr>
            })}
        </tbody>
    );
};

export default CalendarBody;
