import React, { useEffect, useState } from "react";
import baseurl from "../baseURL/baseurl";
import User from "./interface/user";
import QuoteCard from "./QuoteCard";
import "./Quotes.css";

const Quotes = () => {
  //todo prestav ta use effect na home page ker bos poslau array kot prop v ta array zato da bom imel
  //dostop do arraya v home pagu
  const [quotesUsers, setQuotesUsers] = useState<User[]>([]);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await baseurl.get("/list");
        console.log("yo from test");
        if (response) {
          console.log(response.data);
          setQuotesUsers(response.data);
        }
      } catch (error: any) {
        console.log(error.response);
      }
    };
    data();
  }, []);
  return (
    <div className="quoteContainer">
      {/*
      {quotesUsers.map((user) => (
        <Quote key={user.id} userQuote={user} />
      ))}
      */}

      {/*todo pogleda koliko quovtov je in  če je manjše od 5 spremeni colum-item na 2 drugaše je na 3*/}
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
      <QuoteCard />
    </div>
  );
};

export default Quotes;
