import React, { SyntheticEvent, useState } from "react";
import baseurl from "../baseURL/baseurl";
import User from "./interface/user";
import "./QuoteCard.css";

const QuoteCard = (props: {
  userCard: User;
  onUpvote: (quoteId: number) => Promise<void>;
  onDownvote: (quoteId: number) => Promise<void>;
}) => {
  return (
    <div className="card-container">
      <div className="card-grid-container">
        <div className="card-content">{props.userCard.quote.content}</div>
        <div className="card-user">
          {props.userCard.name} {props.userCard.lastname}
        </div>
        <div className="card-voting">
          <div onClick={() => props.onUpvote(props.userCard.quote_id)}>
            <svg
              width="13"
              height="7"
              viewBox="0 0 13 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 6L6.5 1L11.5 6"
                stroke="#322D38"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>{props.userCard.quote.votes}</div>
          <div onClick={() => props.onDownvote(props.userCard.quote_id)}>
            <svg
              width="13"
              height="7"
              viewBox="0 0 13 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 1L6.5 6L1.5 0.999999"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
