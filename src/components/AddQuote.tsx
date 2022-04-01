import React from "react";
import "./AddQuote.css";

const AddQuote = () => {
  return (
    /*todo dodaj da ko uporabnik pise quote se mu izpiše koliko charachterjev ima še na voljo max = 300*/
    <div className="addQuoteContainer">
      <div style={{ fontSize: "2rem" }}>
        Are you felling
        <span style={{ fontSize: "2rem", color: "#DE8667" }}> inspired?</span>
      </div>
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        You can post one quote. You can delete it on your profile or edit in
        this window.
      </div>
      <form>
        <textarea className="quoteText"></textarea>
        <div className="addQuoteButtonsContainer">
          <input type="submit" value="Submit" className="addQuoteSubmitBtn" />
          <button className="addQuoteCancelBtn">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddQuote;
