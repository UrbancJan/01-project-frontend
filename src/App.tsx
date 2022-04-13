import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { Test } from "./components/Test";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import ModalContextProvider from "./components/contexts/ModalContext";
import PrivateRoute from "./components/PrivateRoute";
import QuoteListContextProvider from "./components/contexts/QuoteListsContext";
import UserDetails from "./components/UserDetails";

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
        console.log("user is NOT logged in");
      } else {
        setIsUserLoggedIn(true);
        console.log("user is logged in");
      }
    })();
  }, []);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <QuoteListContextProvider>
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
                <Route path="/test" element={<Test />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/me" element={<Profile />} />
                </Route>
                <Route path="/user/:id" element={<UserDetails />} />
              </Routes>
            </div>
            <div className="main-footer-container">
              <Footer />
            </div>
          </ModalContextProvider>
        </QuoteListContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
