import React, { useEffect, useReducer, useState } from "react";
import reducer, { initialState } from "../reducers/mainReducer";

export const Context = React.createContext();

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getUser = async () => {
      const result = await fetch('http://10.0.5.76:3003/login');
      const json = await result.json();
      dispatch({type: "SET_USER", payload: json});
    }
    getUser();
  }, [])

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export default AppContextProvider;
