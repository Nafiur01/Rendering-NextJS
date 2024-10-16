"use client";
import { createContext, useContext } from "react";

const defaultTheme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

const themeContext = createContext(defaultTheme);

export const ThemeProvider = ({ children }) => {
  return (
    <themeContext.Provider value={defaultTheme}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => useContext(themeContext);
