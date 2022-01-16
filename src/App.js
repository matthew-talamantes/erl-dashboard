import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Header from './components/Header';
import AddEvent from './components/AddEvent';
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
    setEvents([...events, data]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/addEvent' element={<AddEvent onAdd={addEvent} />} />
        <Route path='/' element={
          <>
            <Link to='/addEvent'>Add Event</Link>
            <Calendar displayDate={new Date()} events={events} />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
