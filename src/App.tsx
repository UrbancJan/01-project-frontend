import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { isLoggedInContext } from "./Context/IsLoggedInContext";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/isuserloggedin", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      if (content == false) {
        setIsUserLoggedIn(false);
      } else {
        setIsUserLoggedIn(true);
      }
    })();
  });

  return (
    <BrowserRouter>
      <Nav isUserLoggedIn={isUserLoggedIn} />
      <isLoggedInContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </isLoggedInContext.Provider>
    </BrowserRouter>
  );
}

export default App;
