import React from "react";
import User from "./interface/user";
import "./QuoteCard.css";

const QuoteCard = (props: { userCard: User }) => {
  return (
    <div className="card-container">
      <div className="card-grid-container">
        <div className="card-content">{props.userCard.quote.content}</div>
        <div className="card-user">
          {props.userCard.name} {props.userCard.lastname}
        </div>
        <div className="card-voting">
          <div>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>{props.userCard.quote.votes}</div>
          <div>
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
