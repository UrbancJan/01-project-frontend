import React, { useState, createContext, useContext } from "react";

interface VoteArrowColorContextType {
  upvoteArrowColor: string;
  setUpvoteArrowColor: React.Dispatch<React.SetStateAction<string>>;

  downvoteArrowColor: string;
  setDownvoteArrowColor: React.Dispatch<React.SetStateAction<string>>;
}

const VoteArrowColorContext = createContext<VoteArrowColorContextType>(
  {} as VoteArrowColorContextType
);

const VoteArrowColorContextProvider: React.FC = ({ children }) => {
  const [upvoteArrowColor, setUpvoteArrowColor] = useState("#000000");
  const [downvoteArrowColor, setDownvoteArrowColor] = useState("#000000");

  return (
    <VoteArrowColorContext.Provider
      value={{
        upvoteArrowColor,
        setUpvoteArrowColor,
        downvoteArrowColor,
        setDownvoteArrowColor,
      }}
    >
      {children}
    </VoteArrowColorContext.Provider>
  );
};

export default VoteArrowColorContextProvider;
export const useVoteArrowColor = () => React.useContext(VoteArrowColorContext);
