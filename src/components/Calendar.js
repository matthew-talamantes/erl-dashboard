import React from 'react';
import PropTypes from 'prop-types';
import CalendarBody from './CalendarBody';

const Calendar = ({ displayDate }) => {

    const currentDate = Date.now();
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [year, setYear] = React.useState(displayDate.getFullYear());
    const [month, setMonth] = React.useState(displayDate.getMonth());


    const getMonthName = (date) => {
        return months[month];
    };

    const daysInMonth = (monthOfYear, calendarYear) => {
        return new Date(calendarYear, monthOfYear + 1, 0).getDate();
    };

    let monthDays = daysInMonth(month, year);

    const decreaseYear = () => {
        setYear(year - 1);
    };

    const increaseYear = () => {
        setYear(year + 1);
    };

    const decreaseMonth = () => {
        if (month === 0) {
            setYear(year - 1);
            setMonth(11);
        } else {
            setMonth(month - 1);
        }

    };

    const increaseMonth = () => {
        if (month === 11) {
            setYear(year + 1);
            setMonth(0);
        } else {
            setMonth(month + 1);
        }
    };

    const [daysOfMonth, setDaysOfMonth] = React.useState(daysInMonth(month, year));

    React.useEffect(() => {
        setDaysOfMonth(daysInMonth(month, year));
    }, [month, year]);

    return (
        <section className="container">
            <table id="calendar-element" className="calendar">
                <thead>
                    <tr>
                        <th><span className="btn" id="btn-year-decrease" onClick={decreaseYear}>{`<`}</span> { year } <span className="btn" id="btn-year-increase" onClick={increaseYear}>{`>`}</span></th>
                    </tr>
                    <tr>
                        <th><span className="btn" id="btn-month-decrease" onClick={decreaseMonth}>{`<`}</span> {getMonthName(month)} <span className="btn" id="btn-month-increase" onClick={increaseMonth}>{`>`}</span></th>
                    </tr>
                </thead>
                <CalendarBody year={year} month={month} daysOfMonth={daysOfMonth} />
            </table>
        </section>
    );
};

Calendar.defaultProps = {
    displayDate: new Date()
};

Calendar.propTypes = {
    displayDate: PropTypes.object
}

export default Calendar;
