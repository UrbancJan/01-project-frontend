import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseurl from "../baseURL/baseurl";
import { useQuoteLists } from "./contexts/QuoteListsContext";
import { useUser } from "./contexts/UserContext";
import User from "./interface/user";
import QuoteCard from "./QuoteCard";
import Quotes from "./Quotes";
import { ReactComponent as TopNavCover } from "../assets/ProfileSvg.svg";

const UserDetails = () => {
  const { id } = useParams();
  const { setUserObj, setQuoteContent, userObj } = useUser();
  const [likedList, setLikedList] = useState<User[]>([]);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await baseurl.get("/user/" + id);
        if (response) {
          setUserObj(response.data);
          setQuoteContent(response.data.quote.content);
          console.log(response.data);
          //pridobimo še uporabnikove liked quotes
          try {
            console.log(userObj);
            const responseLikes = await baseurl.get("/liked/" + id);
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
      const listItems = likedList.map((item) =>
        item.quote_id === quoteId
          ? {
              ...item,
              quote: { ...item.quote, votes: response.data },
            }
          : item
      );
      setLikedList(listItems);
      //pogledamo še če je id od quota, ki smo ga upvotali enak "quote of the day", da se posodobi tutdi ta vrednost brez da bi refreshali
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

  async function downvote(quoteId: number) {
    try {
      const response = await baseurl.post("/user/" + quoteId + "/downvote");

      const listItems = likedList.map((item) =>
        item.quote_id === quoteId
          ? {
              ...item,
              quote: { ...item.quote, votes: response.data },
            }
          : item
      );
      setLikedList(listItems);

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
              <div>This user does not have a quote!</div>
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
              <div>This user have not liked any quotes yet!</div>
            )
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDetails;
