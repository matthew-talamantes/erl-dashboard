import React from 'react';
import './App.css';

import Header from './components/Header';
import Calendar from './components/Calendar';

function App() {

  const [events, setEvents] = React.useState({});

  const buildEventsObject = rawEvents => {
    let eventsObj = {};
    rawEvents.forEach(event => {
      const eventYear = event['year'];
      const eventMonth = event['month'];
      const eventDay = event['day'];

      if (event['year'] in eventsObj) {
        if (eventMonth in eventsObj[eventYear]) {
          if (eventDay in eventsObj[eventYear][eventMonth]) {
            eventsObj[eventYear][eventMonth][eventDay].push(event);
          } else {
            eventsObj = {
              [eventYear]: {
                [eventMonth]: {
                  [eventDay]: [event],
                  ...eventsObj[eventYear][eventMonth]
                },
                ...eventsObj[eventYear]
              },
              ...eventsObj
            };
          }
        } else {
          eventsObj = {
            ...eventsObj,
            [eventYear]: {
              ...eventsObj[eventYear],
              [eventMonth]: {
                [eventDay]: [event]
              }
            }
          };
        }
      } else {
        eventsObj = {
          ...eventsObj,
          [eventYear]: {
            [eventMonth]: {
              [eventDay]: [event]
            }
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
