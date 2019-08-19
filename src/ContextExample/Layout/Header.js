import React, { Component } from "react";
import { ThemeContext } from "../theme";

export default class Header extends Component {
  render() {
    const { children } = this.props;
    const { headerColor } = this.context.theme;
    return (
      <header
        style={{
          backgroundColor: headerColor,
          padding: "20px 0px",
          width: "100%"
        }}
      >
        {children}
      </header>
    );
  }
}
Header.contextType = ThemeContext;

export function HeaderRight({ children }) {
  return <div style={{ float: "right" }}>{children}</div>;
}
