import React from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./styledComponents/theme";
import { GlobalStyle } from "./styledComponents/global";
import { AppWrapper } from "./App.style";
import ListContainer from "./containers/ListContainer/ListContainer";

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <AppWrapper>
        <ListContainer />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
