import React, { Component } from "react";
import { LocaleContext } from "./locale";
import intl from "./intl";

export default class Title extends Component {
  render() {
    const { locale } = this.context;
    return <h1>{intl[locale].contentTitle}</h1>;
  }
}

Title.contextType = LocaleContext;
