import React, { useReducer } from "react";
import reducer, { initialState } from "../reducers/mainReducer";

export const Context = React.createContext();

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export default AppContextProvider;
