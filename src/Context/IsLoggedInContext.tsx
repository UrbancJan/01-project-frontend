import { createContext } from "react";
import { Context } from "vm";

interface loggedInStatusContextType {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (data: boolean) => void;
}

export const isLoggedInContext = createContext<loggedInStatusContextType>({
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => {},
});
