import React from 'react';
import './App.css';

import Header from './components/Header';
import Calendar from './components/Calendar';

function App() {

  const [events, setEvents] = React.useState([
    {
      year: 2021,
      months: {
        month: 0,
        days: {
          1: [
            {title: 'morning shift', startTime: '8:00', endTime: '10:45', notes: ''}
          ]
        }
      }
    }
  ]);

  return (
    <>
      <Header />
      <Calendar displayDate={new Date()} />
    </>
  );
}

export default App;
