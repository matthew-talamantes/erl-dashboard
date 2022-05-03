import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";

import Header from "./components/Header";
import AddEvent from "./components/AddEvent";
import Calendar from "./components/Calendar";
import EventView from "./components/EventView";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { getByLabelText } from "@testing-library/react";

function App() {
  const url = "http://127.0.0.1:8000";
  const [events, setEvents] = React.useState([]);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [authCookie, setAuthCookie, removeAuthCookie] = useCookies([
    "erl-auth",
  ]);
  const [refreshCookie, setRefreshCookie, removeRefreshCookie] = useCookies([
    "erl-refresh-token",
  ]);

  // Just for testing, on preduction use cookies
  const [authToken, setAuthToken] = React.useState("");
  const [refreshToken, setRefreshToken] = React.useState("");

  const getCsrf = async () => {
    const csrfCookie = Cookies.get("csrftoken");
    if (typeof csrfCookie === "undefined") {
      const res = await axios.get(`${url}/accounts/csrf_cookie/`);
    }
  };

  const setJwtCookie = (cookieType, token) => {
    const decoded = jwt_decode(token);
    const expire = new Date(parseInt(decoded.exp) * 1000);
    const options = {
      path: "/",
      expires: expire,
    };
    if (cookieType === "authToken") {
      setAuthCookie("erl-auth", token, options);
    } else if (cookieType === "refreshToken") {
      setRefreshCookie("erl-refresh-token", token, options);
    }
  };

  const refreshAccessToken = async () => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const body = {
      refresh: refreshToken,
    };
    const res = await axios.post(
      `${url}/api-auth/token/refresh/`,
      JSON.stringify(body),
      config
    );
    const resStatus = await res.status;
    if (resStatus === 200) {
      setJwtCookie("authToken", res.data.authToken);
    }
  };

  const signUp = async (credentials) => {
    const postUser = {
      username: credentials.username,
      email: credentials.email,
      password1: credentials.password1,
      password2: credentials.password2,
    };
    const res = await fetch(`${url}/api-auth/registration/`, {
      method: "POST",
      credentials: "include",
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postUser),
    });
    const resStatus = await res.status;
  };

  const login = async (credentials) => {
    const postUser = {
      email: credentials.email,
      password: credentials.password,
    };

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    // const res = await fetch(`${url}/api-auth/login/`, {
    //   method: "OPTIONS",
    //   credentials: "include",
    //   withCredentials: true,
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   // body: JSON.stringify(postUser),
    // });

    const res = await axios.post(
      `${url}/api-auth/login/`,
      JSON.stringify(postUser),
      config
    );
    const resStatus = await res.status;
    if (resStatus === 200) {
      setJwtCookie("authToken", res.data.access_token);
      setJwtCookie("refreshToken", res.data.refresh_token);
    }

    console.log("GOtcha");
    // const resStatus = await res.status;
    // if (resStatus === 204) {
    //   setIsAuthenticated(true);
    // }
  };

  const logOut = async () => {
    const res = await fetch(`${url}/api-auth/logout/`, {
      method: "POST",
      credentials: "include",
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
      },
      body: {},
    });

    const resStatus = await res.status;
    if (resStatus === 200) {
      setIsAuthenticated(false);
    }
  };

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
      const res = await fetch(`${url}/api/events/`, {
        credentials: "include",
        withCredentials: true,
      });
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
      credentials: "include",
      withCredentials: true,
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
      <Header isAuthenticated={isAuthenticated} logout={logOut} />
      <Routes>
        <Route path="/signup" element={<Signup onSignup={signUp} />} />
        <Route path="/login" element={<Login onLogin={login} />} />
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
