import React from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    borderColor: "#d8d8d8",
    headerColor: "#333"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    borderColor: "#ffffff",
    headerColor: "#fff"
  },
  clown: {
    foreground: "yellow",
    background: "red",
    borderColor: "blue",
    headerColor: "purple"
  }
};

export const ThemeContext = React.createContext({
  theme: themes.dark, // default value
  toggleTheme: () => {}
});
