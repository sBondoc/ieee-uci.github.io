import React from 'react';
import logo from '../images/ieee_uci_logo_trans_white.png';
import { Grid, Button, Box } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function Header() {
  return(
    <header className='App-header' style={{height: 60, background: 'linear-gradient(to right, #33BFFF, #2A6AC6)'}}>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <img src={logo} style={{height: 200, marginTop: -55}} className="App-logo" alt="logo" />
        <Box marginRight={4} marginTop={-10.5}>
          <Button>Home</Button>
          <Button>About<ArrowDropDownIcon/></Button>
          <Button>Project<ArrowDropDownIcon/></Button>
          <Button>Events</Button>
        </Box>
      </Grid>
    </header>

  );
}