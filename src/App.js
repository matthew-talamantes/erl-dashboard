import React from 'react';
import './App.css';

import Header from './components/Header';
import Calendar from './components/Calendar';

function App() {

  const [events, setEvents] = React.useState({});

  const buildEventsObject = rawEvents => {
    let eventsObj = {};
    rawEvents.forEach(event => {
      if (event['year'] in eventsObj) {
        // if (event['month'] in eventsObj[event['year']]) {
        //   if (event['day'] in eventsObj[event['year']][event['month']]) {
        //     eventsObj[event['year']][event['month']][event['day']].push(event);
        //   } else {
        //     eventsObj[event['year']][event['month']][event['day']] = [event];
        //   }
        // } else {
        //   eventsObj[event['year']][event['month']][event['day']] = [event];
        // }
      } else {
        eventsObj[event['year']] = {
          event['month']: {
            event['day']: [event], 
          },
        };
      }
    });

    return eventsObj;
  };

  React.useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('http://localhost:5000/events');
      const data = await res.json();
      const eventsObj = buildEventsObject(data);
      console.log(eventsObj);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Header />
      <Calendar displayDate={new Date()} events={events} />
    </>
  );
}

export default App;
