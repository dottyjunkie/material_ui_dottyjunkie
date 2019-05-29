import React from 'react';
import logo from './logo.svg';

import MyAppBar from './Components/MyAppBar'
import MyTab from './Components/MyTab'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFE194' }, 
    secondary: { main: '#FA1D00' }, 
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MyAppBar/>
        <MyTab/>
      </ThemeProvider>
    </div>
  );
}

export default App;
