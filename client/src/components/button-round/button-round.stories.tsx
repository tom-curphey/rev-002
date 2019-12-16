import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../styles/theme";
import ButtonRound from "./button-round.component";

storiesOf("ButtonRound", module)
  .add("default/ primary/ secondary", () => (
    <ThemeProvider theme={theme}>
      <div>
        <ButtonRound>default</ButtonRound>
        <ButtonRound color="primary">primary</ButtonRound>
        <ButtonRound color="secondary">secondary</ButtonRound>
      </div>
    </ThemeProvider>
  ))
  .add("inverted", () => (
    <ThemeProvider theme={theme}>
      <div>
        <ButtonRound inverted>default</ButtonRound>
        <ButtonRound inverted color="primary">
          primary
        </ButtonRound>
        <ButtonRound inverted color="secondary">
          secondary
        </ButtonRound>
      </div>
    </ThemeProvider>
  ));
