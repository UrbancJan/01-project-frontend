import React, { SyntheticEvent, useEffect, useState } from "react";
import baseurl from "../baseURL/baseurl";
import "./AddQuote.css";
import { BackgroundSvg } from "./BackgroundSvg";

import { useModal } from "./contexts/ModalContext";
import { useQuoteLists } from "./contexts/QuoteListsContext";
import { useUser } from "./contexts/UserContext";

import User from "./interface/user";

const AddQuote = () => {
  const { addQuote, setAddQuote } = useModal();
  const { allList, setAllList, setLikedList, likedList } = useQuoteLists();
  const { setQuoteContent, quoteContent, setUserObj } = useUser();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const newQuote = JSON.stringify({ content: quoteContent });

    try {
      const response = await baseurl.post("/myquote", newQuote);
      setQuoteContent(response.data.quote.content);

      //posodobimo vrednost v all listu (home page)
      /*const allListItems = allList.map((item) =>
        item.quote_id === response.data.quote_id
          ? {
              ...item,
              quote: { ...item.quote, content: response.data.quote.content },
            }
          : item
      );
      setAllList(allListItems);
      */
      //pogledamo če je vrednost že v alllistu(home page)
      const i = allList.findIndex(
        (element) => element.quote_id === response.data.quote_id
      );
      //če vrednost obstaja jo posodobimo
      if (i > -1) {
        allList[i].quote.content = response.data.quote.content;
        //drugače vstavimo novo vrednost
      } else {
        allList.push(response.data);
      }
      //posodobimo all list
      setAllList(allList);

      //posodobimo vrednost userja
      setUserObj(response.data);

      //posodobimo vrednost v liked listu (profile page)
      const likedListItems = likedList.map((item) =>
        item.quote_id === response.data.quote_id
          ? {
              ...item,
              quote: { ...item.quote, content: response.data.quote.content },
            }
          : item
      );
      setLikedList(likedListItems);

      //setContent(response.data.quote.content);
    } catch (error: any) {
      console.log(error);
    }
  };

  function showAddQuote() {
    if (addQuote == false) {
      setAddQuote(true);
    } else {
      setAddQuote(false);
    }
  }

  return (
    /*todo dodaj da ko uporabnik pise quote se mu izpiše koliko charachterjev ima še na voljo max = 300*/
    <>
      <div className="addQuoteContainer">
        <div style={{ fontSize: "2rem" }}>
          Are you felling
          <span style={{ fontSize: "2rem", color: "#DE8667" }}> inspired?</span>
        </div>
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          You can post one quote. You can delete it on your profile or edit in
          this window.
        </div>
        <form onSubmit={submit}>
          <div>{quoteContent.length}/300</div>
          <textarea
            value={quoteContent}
            onChange={(e) => setQuoteContent(e.target.value)}
            className="quoteText"
            maxLength={300}
          ></textarea>

          <div className="addQuoteButtonsContainer">
            <input type="submit" value="Submit" className="addQuoteSubmitBtn" />
          </div>
        </form>
        <button
          style={{ margin: 0, marginTop: "1rem" }}
          className="addQuoteCancelBtn"
          onClick={showAddQuote}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default AddQuote;
