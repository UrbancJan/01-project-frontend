import React from "react";
import User from "./interface/user";
import "./QuoteCard.css";

//const QuoteCard = (props: { userQuote: User }) => {
const QuoteCard = () => {
  return (
    //<div className="card">{props.userQuote.quote.content}</div>;
    <div className="card-container">
      <div className="card-grid-container">
        <div className="card-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          malesuada nibh ligula. Nunc at mauris sed dui condimentum dapibus quis
          sit amet dui. Curabitur pharetra ex a tellus vestibulum lobortis.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae cubilia rd
        </div>
        <div className="card-user">John Doe</div>
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
          <div>250</div>
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
