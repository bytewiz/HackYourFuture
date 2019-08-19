import React, { Component } from "react";
import { ThemeContext } from "../theme";

export default class Content extends Component {
  render() {
    const { children } = this.props;
    const { background, foreground, borderColor } = this.context.theme;
    return (
      <div
        style={{
          backgroundColor: background,
          flexGrow: 1,
          justifyContent: "center",
          padding: 40,
          color: foreground,
          alignItems: "center",
          border: `1px solid ${borderColor}`
        }}
      >
        {children}
      </div>
    );
  }
}

Content.contextType = ThemeContext;
