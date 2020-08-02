import React from 'react';
import Header from '../Components/Header';
import mainImage from '../images/robot_hand.jpg';
import {Typography, Box} from '@material-ui/core';

export default function Home() {
  return(
    <div>
      <Header/>
      <img src={mainImage} className="App-logo" alt="logo" />
      <Box marginTop={-55}>
        <Typography variant="h4" style={{textAlign: "center"}}>ADVANCING TECHNOLOGY FOR HUMANITY</Typography>
      </Box>
    </div>
  );
}