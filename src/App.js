import React from 'react';
import './App.css';

import Header from './components/Header';
import Calendar from './components/Calendar';

function App() {

  const [events, setEvents] = React.useState({
    2021: {
      0: {
        1: [
          {
            title: 'New Year\'s Day',
            type: 'event',
            startTime: "0:00",
            endTime: '23:59',
            notes: ''
          },
          {
            title: 'Test Entry',
            type: 'event',
            startTime: '8:00',
            endTime: '9:30',
            notes: 'This is a test entry.'
          }
        ]
      },
      10: {
        10: [
          {
            title: 'Birthday Dinner',
            type: 'event',
            startTime: '16:30',
            endTime: '17:30',
            notes: 'At Ford\'s Fish Shack!'
          }
        ]
      }
    }
  });

  return (
    <>
      <Header />
      <Calendar displayDate={new Date()} events={events} />
    </>
  );
}

export default App;
