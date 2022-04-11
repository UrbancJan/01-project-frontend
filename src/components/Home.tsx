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

import { useUser } from "./contexts/UserContext";
import { useQuoteLists } from "./contexts/QuoteListsContext";

const Home = (props: { isUserLoggedIn: boolean }) => {
  //const [list, setList] = useState<User[]>([]);
  const [randomQuote, setRandomQuote] = useState<User>();

  const { allList, setAllList } = useQuoteLists();
  const { setUserObj, setQuoteContent } = useUser();

  useEffect(() => {
    const data = async () => {
      try {
        const response = await baseurl.get("/me");
        if (response) {
          setUserObj(response.data);
          setQuoteContent(response.data.quote.content);
        }
      } catch (error: any) {
        console.log(error.response);
      }
    };
    data();
  }, []);

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await baseurl.get("/list");
        if (response) {
          //setList(response.data);
          setAllList(response.data);
        }
      } catch (error: any) {
        console.log(error.response);
      }
    };
    getList();
  }, []);

  useEffect(() => {
    const getQuoteOfTheDay = async () => {
      try {
        const response = await baseurl.get("/random-quote");
        if (response) {
          setRandomQuote(response.data);
        }
      } catch (error: any) {
        console.log(error.response);
      }
    };
    getQuoteOfTheDay();
  }, []);

  async function upvote(quoteId: number) {
    try {
      const response = await baseurl.post("/user/" + quoteId + "/upvote");
      //const listItems = list.map((item) =>
      const listItems = allList.map((item) =>
        item.quote_id === quoteId
          ? {
              ...item,
              quote: { ...item.quote, votes: response.data },
            }
          : item
      );
      //setList(listItems);
      setAllList(listItems);
      //pogledamo še če je id od quota, ki smo ga upvotali enak "quote of the day", da se posodobi tutdi ta vrednost brez da bi refreshali
      if (randomQuote?.quote_id === quoteId) {
        const ok: User = {
          ...randomQuote!,
          quote: { ...randomQuote.quote, votes: response.data },
        };
        setRandomQuote(ok);
      }
    } catch (error: any) {
      console.log(error);
      console.log(error.response.data.message);
    }
  }

  async function downvote(quoteId: number) {
    try {
      const response = await baseurl.post("/user/" + quoteId + "/downvote");
      //const listItems = list.map((item) =>
      const listItems = allList.map((item) =>
        item.quote_id === quoteId
          ? {
              ...item,
              quote: { ...item.quote, votes: response.data },
            }
          : item
      );
      //setList(listItems);
      setAllList(listItems);
      //pogledamo še če je id od quota, ki smo ga upvotali enak "quote of the day", da se posodobi tutdi ta vrednost brez da bi refreshali
      if (randomQuote?.quote_id === quoteId) {
        const ok: User = {
          ...randomQuote!,
          quote: { ...randomQuote.quote, votes: response.data },
        };
        setRandomQuote(ok);
      }
    } catch (error: any) {
      console.log(error);
      console.log(error.response.data.message);
    }
  }

  var menu;
  //uporabnik ni prijavljen
  if (props.isUserLoggedIn === false) {
    menu = (
      <div className="homeContainer">
        <div className="firstGrid">
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
              <QuoteCard
                userCard={defaultUser}
                onUpvote={upvote}
                onDownvote={downvote}
              />
            </div>
            <div className="blur-grid-item2">
              <QuoteCard
                userCard={defaultUser}
                onUpvote={upvote}
                onDownvote={downvote}
              />
            </div>
            <div className="blur-grid-item3">
              <QuoteCard
                userCard={defaultUser}
                onUpvote={upvote}
                onDownvote={downvote}
              />
            </div>
          </div>
        </div>
        <div className="middleText">
          Explore the world of
          <span style={{ color: "#DE8667" }}> fantastic quotes</span>
        </div>
        <div className="middleText">
          <div style={{ color: "#DE8667" }}>Most upvoted quotes</div>
          <div>
            Most upvoted quotes on the platform. Sign up or login to like the
            quotes and keep them saved in your profile
          </div>
        </div>
      </div>
    );
  } else {
    menu = (
      <div>
        <div className="loggedInMiddleText">
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#DE8667" }}>Quote of the day</div>
            <div>Quote of the day is randomly choosen quote.</div>
          </div>
          <div>
            {randomQuote ? (
              <QuoteCard
                userCard={randomQuote}
                onUpvote={upvote}
                onDownvote={downvote}
              />
            ) : (
              <div>Loading...</div>
            )}
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
    );
  }

  return (
    <div>
      <BackgroundSvg />
      {menu}
      <div>
        {allList ? (
          <Quotes users={allList} onUpvote={upvote} onDownvote={downvote} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
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
    /*
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
              <QuoteCard
                userCard={defaultUser}
                onUpvote={upvote}
                onDownvote={downvote}
              />
            </div>
            <div className="blur-grid-item2">
              <QuoteCard
                userCard={defaultUser}
                onUpvote={upvote}
                onDownvote={downvote}
              />
            </div>
            <div className="blur-grid-item3">
              <QuoteCard
                userCard={defaultUser}
                onUpvote={upvote}
                onDownvote={downvote}
              />
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
          <div
            style={
              props.isUserLoggedIn ? { display: "none" } : { display: "block" }
            }
          >
            {randomQuote ? (
              <QuoteCard
                userCard={randomQuote}
                onUpvote={upvote}
                onDownvote={downvote}
              />
            ) : (
              <div>Loading...</div>
            )}
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
      <div>
        {allList ? (
          <Quotes users={allList} onUpvote={upvote} onDownvote={downvote} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
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
    */
  );
};

export default Home;
