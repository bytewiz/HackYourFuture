import React from "react";
import { ThemeContext } from "../theme";

export default class Navbar extends React.Component {
  render() {
    const { children } = this.props;

    const { background, foreground } = this.context.theme;

    return (
      <div
        style={{
          backgroundColor: background,
          color: foreground,
          width: "20vw"
        }}
      >
        {children}
      </div>
    );
  }
}

Navbar.contextType = ThemeContext;
