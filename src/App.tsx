import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { Test } from "./components/Test";
import Footer from "./components/Footer";

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
    <div className="wrapper">
      <BrowserRouter>
        <div className="main-header-container">
          <Nav
            isUserLoggedIn={isUserLoggedIn}
            setIsUserLoggedIn={setIsUserLoggedIn}
          />
        </div>
        <div className="main-content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login setIsUserLoggedIn={setIsUserLoggedIn} />}
            />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <div className="main-footer-container">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
