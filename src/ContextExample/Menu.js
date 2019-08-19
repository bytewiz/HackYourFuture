import React, { Component } from "react";
import intl from "./intl";
import { LocaleContext } from "./locale";

export default class Menu extends Component {
  render() {
    const { locale } = this.context;
    return (
      <ul>
        {intl[locale].navbar.map((item, i) => (
          <li key={i}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

Menu.contextType = LocaleContext;
