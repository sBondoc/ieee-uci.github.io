import React from 'react';
import logo from '../images/ieee_uci_logo_trans_white.png';
import { Grid, Button, Box } from '@material-ui/core';

export default function Header() {
  return(
    <div>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <img src={logo} style={{width: "15%"}} className="App-logo" alt="logo" />
        <Box marginRight="5%">
          <Button>Homepage</Button>
        </Box>
      </Grid>
    </div>
  );
}