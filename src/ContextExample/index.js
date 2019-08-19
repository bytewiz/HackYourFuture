import React from "react";
import Page from "./Layout/Page";
import Header, { HeaderRight } from "./Layout/Header";
import ContentWrapper from "./Layout/ContentWrapper";
import Navbar from "./Layout/Navbar";
import Content from "./Layout/Content";
import Menu from "./Menu";
import ThemePickerMenu from "./ThemePickerMenu";
import LocalePickerMenu from "./LocalePickerMenu";
import Title from "./Title";
import { ThemeContext, themes } from "./theme";
import { LocaleContext, locales } from "./locale";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggleTheme = e => {
      const selectedTheme = e.target.value;
      this.setState(state => ({
        theme: themes[selectedTheme]
      }));
    };
    this.toggleLocale = e => {
      const selectedLanguage = e.target.value;
      this.setState(state => ({
        locale: locales[selectedLanguage]
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
      locale: locales.en,
      toggleLocale: this.toggleLocale
    };
  }

  render() {
    const { theme, toggleTheme, locale, toggleLocale } = this.state;
    return (
      <LocaleContext.Provider value={{ locale, toggleLocale }}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Page>
            <Header>
              <HeaderRight>
                <LocalePickerMenu />
                <ThemePickerMenu />
              </HeaderRight>
            </Header>
            <ContentWrapper>
              <Navbar>
                <Menu />
              </Navbar>
              <Content>
                <Title />
                <img alt="catputer" src={require("../images/catputer.gif")} />
              </Content>
            </ContentWrapper>
          </Page>
        </ThemeContext.Provider>
      </LocaleContext.Provider>
    );
  }
}

export default App;
