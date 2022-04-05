import React, { useState, createContext, useContext } from "react";
//https://www.youtube.com/watch?v=UFIUMPLwcdw

interface UserContextType {
  userId: number;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  lastname: string;
  setLastname: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  quoteId: number;
  setQuoteId: React.Dispatch<React.SetStateAction<number>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  vote: number;
  setVote: React.Dispatch<React.SetStateAction<number>>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

const UserContextProvider: React.FC = ({ children }) => {
  const [userId, setUserId] = useState(0);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [quoteId, setQuoteId] = useState(0);
  const [content, setContent] = useState("");
  const [vote, setVote] = useState(0);

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        name,
        setName,
        lastname,
        setLastname,
        email,
        setEmail,
        quoteId,
        setQuoteId,
        content,
        setContent,
        vote,
        setVote,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
export const useUser = () => React.useContext(UserContext);
