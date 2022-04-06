import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import baseurl from "../baseURL/baseurl";

const PrivateRoute = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();
  /*useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/isuserloggedin", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      console.log("user logged in status yo: " + content);
      if (content == false) {
        setIsUserLoggedIn(false);
      } else {
        setIsUserLoggedIn(true);
      }
    })();
  }, []);*/

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/isuserloggedin", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const json = await response.json();
      setIsUserLoggedIn(json);
      console.log("result is: " + json);
    };
    fetchData().catch(console.error);
  }, []);

  console.log("user logged in status: " + isUserLoggedIn);

  if (isUserLoggedIn === undefined) return null;
  return isUserLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
