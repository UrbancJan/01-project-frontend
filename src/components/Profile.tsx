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

  useEffect(() => {
    const data = async () => {
      try {
        const response = await baseurl.get("/me");
        if (response) {
          setUserObj(response.data);
          setQuoteContent(response.data.quote.content);
          //pridobimo še uporabnikove liked quotes
          try {
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

  async function upvote(quoteId: number) {
    try {
      const response = await baseurl.post("/user/" + quoteId + "/upvote");
      //pogledamo še če je id od quota, ki smo ga upvotali enak user quovtu, da se posodobi tudi ta vrednost brez da bi refreshali
      if (userObj?.quote_id === quoteId) {
        //pogleda če je user quote že v liked seznamu in če je ga odstrani
        if (likedList.some((item) => item.quote_id === quoteId)) {
          setLikedList(likedList.filter((e) => e.quote_id !== quoteId));
          //posodobimo vrednosti karma in user quote
          const ok: User = {
            ...userObj!,
            quote: { ...userObj.quote, votes: response.data.votes },
            votestatus: response.data.state,
          };
          setUserObj(ok);
          return;
        }
        const ok: User = {
          ...userObj!,
          quote: { ...userObj.quote, votes: response.data.votes },
          votestatus: response.data.state,
        };
        setUserObj(ok);
        //v liked quotes array dodamo user qoute, če user še ni upvotu svojega quovta
        setLikedList((likedQuotes) => [...likedQuotes, ok]);
      } else {
        //če uporabnik upvota kar je že v liked seznamu odstranimo ta element
        setLikedList(likedList.filter((item) => item.quote_id !== quoteId));
      }
      //pogledamo če je user še enkrat upvotu, da quote odstranimo iz seznama
      //setLikedList(likedList.filter((item) => item.quote_id !== quoteId));
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
          quote: { ...userObj.quote, votes: response.data.votes },
          votestatus: response.data.state,
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
