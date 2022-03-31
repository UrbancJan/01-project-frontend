import React from "react";
import User from "./interface/user";
import "./Quote.css";

const Quote = (props: { userQuote: User }) => {
  return <div className="card">{props.userQuote.quote.content}</div>;
};

export default Quote;
