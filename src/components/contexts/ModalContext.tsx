import React, { useState, createContext, useContext } from "react";

interface ModalContextType {
  addQuote: boolean;
  setAddQuote: React.Dispatch<React.SetStateAction<boolean>>;
  addProfile: boolean;
  setAddProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

const ModalContextProvider: React.FC = ({ children }) => {
  const [addQuote, setAddQuote] = useState(false);
  const [addProfile, setAddProfile] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        addQuote,
        setAddQuote,
        addProfile,
        setAddProfile,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
export const useModal = () => React.useContext(ModalContext);
