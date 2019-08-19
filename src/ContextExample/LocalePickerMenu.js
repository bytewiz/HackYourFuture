import React from "react";
import { LocaleContext, locales } from "./locale";

const localeMap = {
  en: "English",
  da: "Dansk"
};

export default function LanguagePickerMenu() {
  return (
    <LocaleContext.Consumer>
      {({ locale, toggleLocale }) => {
        return (
          <select className="select-css" onChange={toggleLocale}>
            {Object.keys(locales).map(localeKey => (
              <option value={localeKey}>{localeMap[localeKey]}</option>
            ))}
          </select>
        );
      }}
    </LocaleContext.Consumer>
  );
}
