import React, { useEffect, useState } from "react";
import "./Home.css";
import baseurl from "../baseURL/baseurl";
import Quotes from "./Quotes";
import QuoteCard from "./QuoteCard";
import { Link } from "react-router-dom";
import { BackgroundSvg } from "./BackgroundSvg";
import AddQuote from "./AddQuote";
import { useModal } from "./contexts/ModalContext";
import Settings from "./Settings";
import User from "./interface/user";
import defaultUser from "../components/common/defaultUser.json";

const Home = (props: { isUserLoggedIn: boolean }) => {
  const [list, setList] = useState<User[]>([]);

  useEffect(() => {
    const getList = async () => {
      console.log("supp");
      try {
        const response = await baseurl.get("/list");
        if (response) {
          setList(response.data);
        }
      } catch (error: any) {
        console.log(error.response);
      }
    };
    getList();
  }, []);

  const { addQuote, addProfile } = useModal();
  return (
    <div>
      <BackgroundSvg />
      <div className="homeContainer">
        <div
          className="firstGrid"
          style={
            props.isUserLoggedIn ? { display: "none" } : { display: "grid" }
          }
        >
          <div className="firstGridItemContainer">
            <h1>
              Welcome to <span style={{ color: "#DE8667" }}>Quotastic</span>
            </h1>
            <div style={{ width: "60%" }}>
              Quotastic is free online platform for you to explore the quips,
              quotes, and proverbs. Sign up and express yourself.
            </div>
            <div className="signUpBtn">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <div className="navSignUpBtn">Sign up</div>
              </Link>
            </div>
          </div>
          <div className="blur-grid">
            <div className="blur-grid-item1">
              <QuoteCard userCard={defaultUser} />
            </div>
            <div className="blur-grid-item2">
              <QuoteCard userCard={defaultUser} />
            </div>
            <div className="blur-grid-item3">
              <QuoteCard userCard={defaultUser} />
            </div>
          </div>
        </div>
        <div
          className="middleText"
          style={
            props.isUserLoggedIn ? { display: "none" } : { display: "block" }
          }
        >
          Explore the world of
          <span style={{ color: "#DE8667" }}> fantastic quotes</span>
        </div>

        <div className="loggedInMiddleText">
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#DE8667" }}>Quote of the day</div>
            <div>Quote of the day is randomly choosen quote.</div>
          </div>
        </div>

        <div className="middleText">
          <div style={{ color: "#DE8667" }}>Most upvoted quotes</div>
          <div>
            Most upvoted quotes on the platform. Sign up or login to like the
            quotes and keep them saved in your profile
          </div>
        </div>
      </div>
      <div>{list ? <Quotes users={list} /> : <div>Loading...</div>}</div>
      <div className="signUpBtnBottom">
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            color: "#DE8667",
          }}
        >
          <div>Sign up to see more</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
