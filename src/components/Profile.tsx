import React, { useEffect, useState } from "react";
import "./Profile.css";
import { ReactComponent as TopNavCover } from "../assets/ProfileSvg.svg";
import idk from "../assets/ProfileSvg.svg";
import QuoteCard from "./QuoteCard";
import Quotes from "./Quotes";
import baseurl from "../baseURL/baseurl";
import User from "./interface/user";
import Quote from "./interface/quote";

const Profile = () => {
  const [user, setUser] = useState<User>();
  const [likedQuotes, setLikedQuotes] = useState<User[]>([]);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await baseurl.get("/me");
        if (response) {
          setUser(response.data);
        }
      } catch (error: any) {
        console.log(error.response);
      }
    };
    data();
  }, []);

  useEffect(() => {
    const getLikedQuotes = async () => {
      try {
        const response = await baseurl.get("/liked");
        if (response) {
          setLikedQuotes(response.data);
        }
      } catch (error: any) {
        console.log(error.response);
      }
    };
    getLikedQuotes();
  }, []);

  return (
    <>
      <div className="profileContainer">
        <TopNavCover className="svgContainer" />
        <div className="profileMainInfoContainer">
          <div style={{ color: "white", fontSize: "35px" }}>
            {user?.name} {user?.lastname}
          </div>
          <div className="profileKarma">
            <div>Quotastic karma</div>
            <div>{user?.quote.votes}</div>
          </div>
        </div>

        <div className="userProfileQuoteCard">
          <div
            style={{
              color: "#DE8667",
              fontSize: "24px",
              paddingBottom: "2rem",
            }}
          >
            Quote
          </div>
          {/*user ? <QuoteCard userCard={user} /> : <div>Loading...</div>*/}
        </div>
        <div>
          <div style={{ margin: "1rem", fontSize: "24px" }}>Likes</div>
          {/*likedQuotes ? <Quotes users={likedQuotes} /> : <div>Loading...</div>*/}
        </div>
      </div>
    </>
  );
};

export default Profile;
