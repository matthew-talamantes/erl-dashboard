import React from 'react';
import PropTypes from 'prop-types';

const Calendar = ({ displayDate }) => {

    const currentDate = Date.now();
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const getMonthName = (date) => {
        const month = date.getMonth();
        return months[month];
    };

    const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    };

    return (
        <section className="container">
            <table id="calendar-element" className="calendar">
                <thead>
                    <tr>
                        <th>{ displayDate.getFullYear() }</th>
                    </tr>
                    <tr>
                        <th>{getMonthName(displayDate)}</th>
                    </tr>
                </thead>
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
