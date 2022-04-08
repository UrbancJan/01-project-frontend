import React, { useEffect, useState } from "react";
import baseurl from "../baseURL/baseurl";
import Quote from "./interface/quote";
import User from "./interface/user";
import QuoteCard from "./QuoteCard";
import "./Quotes.css";

const Quotes = (props: {
  users: User[];
  onUpvote: (quoteId: number) => Promise<void>;
  onDownvote: (quoteId: number) => Promise<void>;
}) => {
  return (
    <div className="quoteContainer">
      {props.users?.map((userr) => (
        <QuoteCard
          key={userr.id}
          userCard={userr}
          onUpvote={props.onUpvote}
          onDownvote={props.onDownvote}
        />
      ))}
      {/*todo pogleda koliko quovtov je in  če je manjše od 5 spremeni colum-item na 2 drugaše je na 3*/}
    </div>
  );
};

export default Quotes;
