import React from "react";

export const locales = {
  en: "en",
  da: "da"
};

export const LocaleContext = React.createContext({
  language: locales.en, // default value
  toggleLocale: () => {}
});
