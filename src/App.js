import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[900]
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <h1>Aplicação Ract</h1>

    <Button variant='contained'>Default</Button>
    <Button variant='contained' color='primary'>Primary</Button>
    <Button variant='contained' color='secondary'>Secondary</Button>
  </ThemeProvider>
)

export default App;