import React, { useEffect, useState } from "react";
import "./Profile.css";
import { ReactComponent as TopNavCover } from "../assets/ProfileSvg.svg";
import idk from "../assets/ProfileSvg.svg";
import QuoteCard from "./QuoteCard";
import Quotes from "./Quotes";
import baseurl from "../baseURL/baseurl";
import User from "./interface/user";
import Quote from "./interface/quote";
import { useUser } from "./contexts/UserContext";
import { useQuoteLists } from "./contexts/QuoteListsContext";

const Profile = () => {
  //const [user, setUser] = useState<User>();
  //const [likedQuotes, setLikedQuotes] = useState<User[]>([]);
  const { setUserObj, setQuoteContent, userObj } = useUser();
  const { setLikedList, likedList } = useQuoteLists();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await baseurl.get("/me");
        if (response) {
          setUserObj(response.data);
          setQuoteContent(response.data.quote.content);
          console.log(response.data);
          //pridobimo še uporabnikove liked quotes
          try {
            console.log(userObj);
            const responseLikes = await baseurl.get(
              "/liked/" + response.data.id
            );
            if (responseLikes) {
              setLikedList(responseLikes.data);
            }
          } catch (error: any) {
            console.log(error);
          }
        }
      } catch (error: any) {
        console.log(error);
      }
    };
    data();
  }, []);

  /*useEffect(() => {
    const getLikedQuotes = async () => {
      try {
        const response = await baseurl.get("/liked/" + userObj?.id);
        if (response) {
          setLikedList(response.data);
        }
      } catch (error: any) {
        console.log(error.response);
      }
    };
    getLikedQuotes();
  }, []);*/

  async function upvote(quoteId: number) {
    try {
      const response = await baseurl.post("/user/" + quoteId + "/upvote");
      //pogledamo še če je id od quota, ki smo ga upvotali enak user quovtu, da se posodobi tudi ta vrednost brez da bi refreshali
      if (userObj?.quote_id === quoteId) {
        const ok: User = {
          ...userObj!,
          quote: { ...userObj.quote, votes: response.data },
        };
        setUserObj(ok);

        //v liked quotes array dodamo user qoute, če user še ni upvotu svojega quovta
        setLikedList((likedQuotes) => [...likedQuotes, ok]);
      }
    } catch (error: any) {
      console.log(error);
      console.log(error.response.data.message);
    }
  }

  async function downvote(quoteId: number) {
    try {
      const response = await baseurl.post("/user/" + quoteId + "/downvote");
      setLikedList(likedList.filter((item) => item.quote_id !== quoteId));

      //pogledamo še če je id od quota, ki smo ga dovnwotali enak user quovtu, da se posodobi tutdi ta vrednost brez da bi refreshali
      if (userObj?.quote_id === quoteId) {
        const ok: User = {
          ...userObj!,
          quote: { ...userObj.quote, votes: response.data },
        };
        setUserObj(ok);
      }
    } catch (error: any) {
      console.log(error);
      console.log(error.response.data.message);
    }
  }

  return (
    <>
      <div className="profileContainer">
        <TopNavCover className="svgContainer" />
        <div className="profileMainInfoContainer">
          <div style={{ color: "white", fontSize: "35px" }}>
            {userObj?.name} {userObj?.lastname}
          </div>
          <div className="profileKarma">
            <div>Quotastic karma</div>
            {userObj?.quote?.votes ? (
              <div>{userObj?.quote?.votes}</div>
            ) : (
              <div>0</div>
            )}
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

          {userObj ? (
            userObj.quote_id !== null ? (
              <QuoteCard
                userCard={userObj}
                onUpvote={upvote}
                onDownvote={downvote}
              />
            ) : (
              <div>You do not have a quote!</div>
            )
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div>
          <div style={{ margin: "1rem", fontSize: "24px" }}>Likes</div>
          {likedList ? (
            likedList.length !== 0 ? (
              <Quotes
                users={likedList}
                onUpvote={upvote}
                onDownvote={downvote}
              />
            ) : (
              <div>You have not liked any quotes yet!</div>
            )
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
