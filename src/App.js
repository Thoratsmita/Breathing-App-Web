import React from "react";
import { ThemeProvider, StyleReset, Div } from "atomize";
import Login from "./Login";

const App = () => {
  return (
    <ThemeProvider /*theme={theme}*/>
      {/* <StyleReset /> */}
      <Div>Test</Div>
      <Login />
    </ThemeProvider>
  );
};

export default App;
