import React, { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <AppContext.Provider value={[open, setOpen]}>
      {props.children}
    </AppContext.Provider>
  );
};
