import React from "react";
import { ThemeContext, themes } from "./theme";

export default function ThemePickerMenu() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        return (
          <select className="select-css" onChange={toggleTheme}>
            {Object.keys(themes).map(themeKey => (
              <option value={themeKey}>{themeKey} theme</option>
            ))}
          </select>
        );
      }}
    </ThemeContext.Consumer>
  );
}
