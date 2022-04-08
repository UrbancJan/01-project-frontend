import React, { useState, createContext, useContext } from "react";
import User from "../interface/user";
import Quote from "../interface/quote";
//https://www.youtube.com/watch?v=UFIUMPLwcdw

type UserContextType = {
  userObj: User | undefined;
  setUserObj: React.Dispatch<React.SetStateAction<User>>;

  quoteContent: string;
  setQuoteContent: React.Dispatch<React.SetStateAction<string>>;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

const UserContextProvider: React.FC = ({ children }) => {
  const [userObj, setUserObj] = useState<User>({
    id: -1,
    name: "",
    lastname: "",
    password: "",
    quote_id: -1,
    email: "",
    quote: {
      id: -1,
      content: "",
      votes: -1,
    },
  });
  const [quoteContent, setQuoteContent] = useState("");

  return (
    <UserContext.Provider
      value={{
        userObj,
        setUserObj,
        quoteContent,
        setQuoteContent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
export const useUser = () => React.useContext(UserContext);
