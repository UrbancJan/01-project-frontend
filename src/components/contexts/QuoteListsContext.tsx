import React, { useState, createContext, useContext } from "react";
import User from "../interface/user";

interface QuoteListsContextType {
  allList: User[];
  setAllList: React.Dispatch<React.SetStateAction<User[]>>;

  likedList: User[];
  setLikedList: React.Dispatch<React.SetStateAction<User[]>>;
}

const QuoteListsContext = createContext<QuoteListsContextType>(
  {} as QuoteListsContextType
);

const QuoteListContextProvider: React.FC = ({ children }) => {
  const [allList, setAllList] = useState<User[]>([]);
  const [likedList, setLikedList] = useState<User[]>([]);

  return (
    <QuoteListsContext.Provider
      value={{
        allList,
        setAllList,
        likedList,
        setLikedList,
      }}
    >
      {children}
    </QuoteListsContext.Provider>
  );
};

export default QuoteListContextProvider;
export const useQuoteLists = () => React.useContext(QuoteListsContext);
