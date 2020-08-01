import React from 'react';
import logo from '../images/ieee_uci_logo_trans_white.png';
import { Grid, Button } from '@material-ui/core';

export default function Header() {
  return(
    <div>
      <Grid justify="space-between">
        <img src={logo} className="App-logo" alt="logo" />
        <Button style={{color: "white"}}></Button>
      </Grid>
    </div>
  );
}