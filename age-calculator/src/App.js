import React from "react";
import "./App.css";
import Box from "./Box/Box";
import poppinsRegular from "./assets/fonts/Poppins-Regular.ttf";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

/*const poppinsRegular = {
  fontFamily: "Poppins",
  fontStyle: "regular",
  src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${"./assets/fonts/Poppins-Regular.ttf"}) format('truetype')
  `,
};*/

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Arial"',
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [poppinsRegular],
      },
    },
  },
});

function App() {
  return (
    /*<ThemeProvider theme={theme}>
      <CssBaseline />*/
    <div className="App">
      <Box />
    </div>
    /*</ThemeProvider>*/
  );
}

export default App;
