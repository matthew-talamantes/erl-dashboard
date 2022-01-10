import React from 'react';
import PropTypes from 'prop-types';
import CalendarBody from './CalendarBody';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Calendar = ({ displayDate, events }) => {

    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const [year, setYear] = React.useState(displayDate.getFullYear());
    const [month, setMonth] = React.useState(displayDate.getMonth());


    const getMonthName = (date) => {
        return months[month];
    };

    const daysInMonth = (monthOfYear, calendarYear) => {
        return new Date(calendarYear, monthOfYear + 1, 0).getDate();
    };

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

    const getMonthEvents = (month, year) => {
        try {
            return events[year][month];
        } catch (e) {
            if (e instanceof TypeError) {
                return {};
            }
        }
    };

    const [daysOfMonth, setDaysOfMonth] = React.useState(daysInMonth(month, year));

    React.useEffect(() => {
        setDaysOfMonth(daysInMonth(month, year));
    }, [month, year]);

    return (
        <section>
            <Container fluid="md">
                <Row className="justify-content-center  ps-1 pe-1">
                    <table id="calendar-element" className="calendar mt-4 border border-dark rounded">
                        <thead className="border border-dark">
                            <tr>
                                <th colSpan="7"><span className="btn" id="btn-year-decrease" onClick={decreaseYear}>{`<`}</span> { year } <span className="btn" id="btn-year-increase" onClick={increaseYear}>{`>`}</span></th>
                            </tr>
                            <tr>
                                <th className="border border-dark" colSpan="7"><span className="btn" id="btn-month-decrease" onClick={decreaseMonth}>{`<`}</span> {getMonthName(month)} <span className="btn" id="btn-month-increase" onClick={increaseMonth}>{`>`}</span></th>
                            </tr>
                        </thead>
                        <CalendarBody year={year} month={month} daysOfMonth={daysOfMonth} events={getMonthEvents(month, year)} />
                    </table>
                </Row>
            </Container>
        </section>
    );
};

Calendar.defaultProps = {
    displayDate: new Date(),
    events: {}
};

Calendar.propTypes = {
    displayDate: PropTypes.instanceOf(Date),
    events: PropTypes.object
}

export default Calendar;
