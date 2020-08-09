import React from 'react';
import Home from './Pages/Home';
import Board from './Pages/Board'
import Who from './Pages/Who';
import Arcade from './Pages/Arcade';
import Events from './Pages/Events';
import Micromouse from './Pages/Micromouse';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const theme = createMuiTheme({
  palette: { 
    background:{
      default: '#000000',
    },
    text:{
      primary: '#ffffff',
      secondary: '#ffffff'
    },
  },
  overrides:{
    
  },
  typography: {
    fontFamily: 'Source Code Pro, monospace',
    button: {
      fontSize: 20,
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects/micromouse">
              <Micromouse />
            </Route>
            <Route path="/projects/arcade">
              <Arcade/>
            </Route>
            <Route path="/about/board">
              <Board />
            </Route>
            <Route path="/about/who">
              <Who/>
            </Route>
            <Route path="/events">
              <Events/>
            </Route>
          </Switch>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
