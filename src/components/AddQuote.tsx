import React, { SyntheticEvent, useEffect, useState } from "react";
import baseurl from "../baseURL/baseurl";
import "./AddQuote.css";
import { BackgroundSvg } from "./BackgroundSvg";
import { useModal } from "./contexts/ModalContext";
import { useUser } from "./contexts/UserContext";

import User from "./interface/user";

const AddQuote = () => {
  const [newContent, setNewContent] = useState("");
  const { addQuote, setAddQuote } = useModal();
  //const { content, setContent } = useUser();

  useEffect(() => {
    const data = async () => {
      try {
        const response = await baseurl.get("/me");
        if (response) {
          //setUser(response.data);
          setNewContent(response.data.quote.content);
        }
      } catch (error: any) {
        console.log(error);
      }
    };
    data();
  }, []);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const newQuote = JSON.stringify({ content: newContent });
    //const newQuote = JSON.stringify({ content: content });

    try {
      const response = await baseurl.post("/myquote", newQuote);
      setNewContent(response.data.quote.content);
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
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            //onChange={(e) => setContent(e.target.value)}
            className="quoteText"
          ></textarea>

          <div className="addQuoteButtonsContainer">
            <input type="submit" value="Submit" className="addQuoteSubmitBtn" />
          </div>
        </form>
        <button className="addQuoteCancelBtn" onClick={showAddQuote}>
          Cancel
        </button>
      </div>
    </>
  );
};

export default AddQuote;
