import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [addr, setAddr] = useState();
  const [newProvider, setNewProvider] = useState();
  const [c, setC] = useState();
  const [d, setD] = useState();
  const [e, setE] = useState();

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        addr,
        newProvider,
        c,
        d,
        e,
        setAddr,
        setNewProvider,
        setC,
        setD,
        setE,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
