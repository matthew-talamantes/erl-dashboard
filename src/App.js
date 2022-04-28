import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from "./components/Header";
import AddEvent from "./components/AddEvent";
import Calendar from "./components/Calendar";
import EventView from "./components/EventView";

function App() {
  const url = "http://127.0.0.1:8000";
  const [events, setEvents] = React.useState([]);

  const setUtcDate = (dateStr) => {
    const year = dateStr.slice(0, 4);
    const month = parseInt(dateStr.slice(5, 7)) - 1;
    const day = dateStr.slice(8, 10);
    const hour = dateStr.slice(11, 13);
    const minute = dateStr.slice(14, 16);
    const second = dateStr.slice(17, 19);

    const utcDate = new Date(Date.UTC(year, month, day, hour, minute, second));
    return utcDate;
  };

  const convertEvent = (item) => {
    let eventObj = {};
    eventObj["id"] = item["uid"];
    eventObj["title"] = item["title"];
    eventObj["notes"] = item["description"];
    eventObj["type"] = item["eventType"];

    // For now you can't have a endTime on a different day as startTime
    const utcStart = setUtcDate(item["startTime"]);
    const utcEnd = setUtcDate(item["endTime"]);
    eventObj["year"] = utcStart.getFullYear();
    eventObj["month"] = utcStart.getMonth();
    eventObj["day"] = utcStart.getDate();
    eventObj["startTime"] = `${utcStart.getHours()}:${utcStart.getMinutes()}`;
    eventObj["endTime"] = `${utcEnd.getHours()}:${utcEnd.getMinutes()}`;
    eventObj["slug"] = item["slug"];
    return eventObj;
  };

  React.useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch(`${url}/api/events/`);
      const jsonData = await res.json();
      // Convert to expected format
      const data = jsonData.map((item) => {
        return convertEvent(item);
      });

      setEvents(data);
    };

    fetchEvents();
  }, []);

  const addEvent = async (event) => {
    const startHour = event["startTime"].slice(
      0,
      event["startTime"].indexOf(":")
    );
    const startMinute = event["startTime"].slice(-2);
    const endHour = event["endTime"].slice(0, event["endTime"].indexOf(":"));
    const endMinute = event["endTime"].slice(-2);
    const startDate = new Date(
      event["year"],
      event["month"],
      event["day"],
      startHour,
      startMinute
    );
    const endDate = new Date(
      event["year"],
      event["month"],
      event["day"],
      endHour,
      endMinute
    );
    const postEvent = {
      title: event["title"],
      startTime: `${startDate.getUTCFullYear()}-${
        startDate.getUTCMonth() + 1
      }-${startDate.getUTCDate()}T${startDate.getUTCHours()}:${startDate.getUTCMinutes()}:${startDate.getUTCSeconds()}`,
      endTime: `${endDate.getUTCFullYear()}-${
        endDate.getUTCMonth() + 1
      }-${endDate.getUTCDate()}T${endDate.getUTCHours()}:${endDate.getUTCMinutes()}:${endDate.getUTCSeconds()}`,
      description: event["notes"],
    };

    const res = await fetch(`${url}/api/events/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postEvent),
    });

    const jsonData = await res.json();
    const data = convertEvent(jsonData);
    setEvents([...events, data]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/addEvent" element={<AddEvent onAdd={addEvent} />} />
        <Route
          path="/"
          element={
            <>
              <Calendar displayDate={new Date()} events={events} />
            </>
          }
        />
        <Route
          path="/event/:slug"
          element={<EventView url={url} convertEvent={convertEvent} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
