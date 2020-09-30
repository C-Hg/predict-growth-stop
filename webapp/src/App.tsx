import React from "react";
import { ThemeProvider } from "styled-components";

import AppContainer from "./AppContainer.styled";
import ContentContainer from "./ContentContainer.styled";
import Title from "./components/Title";
import Form from "./form/Form";
import theme from "./styles/theme";

// TODO: a component for each type of cell (age, expected and actual weight)
// weight should be the same component but with a different state
// finally, group the 3 cells in a single component, and perform the checks at this level
// add legend cells
// add interval selection with associated checks
// bonus: graphic representation with react-chartjs-2

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <ContentContainer>
          <Title />
          <Form />
          {/* <About /> a few words about the study  */}
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
