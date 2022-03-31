import axios from "axios";
import React, { useEffect, useState } from "react";
import baseurl from "../baseURL/baseurl";

export const Test = () => {
  const [quotesUsers, setQuotesUsers] = useState([]);

  /*useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/list", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const content = await response.json();
      console.log(content);
    })();
  });*/

  return (
    <div>
      <div>
        {quotesUsers.map((quote) => (
          <Quote key={quote.quote_id} />
        ))}
      </div>
      ;
    </div>
  );
};
