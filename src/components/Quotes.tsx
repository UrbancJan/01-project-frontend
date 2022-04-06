import React, { useEffect, useState } from "react";
import baseurl from "../baseURL/baseurl";
import Quote from "./interface/quote";
import User from "./interface/user";
import QuoteCard from "./QuoteCard";
import "./Quotes.css";

const Quotes = (props: { users: User[] }) => {
  return (
    <div className="quoteContainer">
      {props.users?.map((userr, index) => (
        <QuoteCard key={index} userCard={userr} />
      ))}
      {/*todo pogleda koliko quovtov je in  če je manjše od 5 spremeni colum-item na 2 drugaše je na 3*/}
    </div>
  );
};

export default Quotes;
