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
import AddQuote from "./components/AddQuote";
import Settings from "./components/Settings";
import Profile from "./components/Profile";

import UserContextProvider from "./components/contexts/UserContext";
import baseurl from "./baseURL/baseurl";
import ModalContextProvider from "./components/contexts/ModalContext";

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
        <ModalContextProvider>
          <div className="main-header-container">
            <Nav
              isUserLoggedIn={isUserLoggedIn}
              setIsUserLoggedIn={setIsUserLoggedIn}
            />
          </div>
          <div className="main-content-container">
            <Routes>
              <Route
                path="/"
                element={<Home isUserLoggedIn={isUserLoggedIn} />}
              />
              <Route
                path="/login"
                element={<Login setIsUserLoggedIn={setIsUserLoggedIn} />}
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/myquote" element={<AddQuote />} />
              <Route path="/me/update-password" element={<Settings />} />
              <Route path="/me" element={<Profile />} />
            </Routes>
          </div>
          <div className="main-footer-container">
            <Footer />
          </div>
        </ModalContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
