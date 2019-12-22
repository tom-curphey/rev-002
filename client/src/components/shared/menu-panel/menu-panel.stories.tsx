import { storiesOf } from "@storybook/react";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import MenuPanel from "./menu-panel.component";

storiesOf("MenuPanel", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <MenuPanel />
  </ThemeProvider>
));
