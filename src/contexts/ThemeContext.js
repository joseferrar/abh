import React, { createContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const MediaContext = createContext();

const MediaProvider = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const value = matches;

  return (
    <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
  );
};

export default MediaProvider;
