import React from 'react';
import './App.css';

import Header from './components/Header';
import Calendar from './components/Calendar';

function App() {
  
  const url = 'http://localhost:5000';
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(`${url}/events`);
      const data = await res.json();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  const addEvent = async (event) => {
    const res = await fetch(`${url}/events`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(event),
    });

    const data = await res.json();
    // const newEvents = insertIntoObject(events, data);
    // setEvents(newEvents);
  };

  return (
    <>
      <Header />
      <Calendar displayDate={new Date()} events={events} />
    </>
  );
}

export default App;
