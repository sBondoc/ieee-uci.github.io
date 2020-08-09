import React from 'react';
import Header from '../Components/Header';
import MMImage from '../images/micromouse.png';
import PCBImage from '../images/mousepcb.jpg';
import {Typography, Box, Grid} from '@material-ui/core';
import Footer from '../Components/Footer';
import '../Styles/index.css'

const introText = `Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci 
tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse- 
quat. Duis autem vel eum iriure dolor in`;

export default function Micromouse() {

  return(
    <div>
      <Header/>
      <Box paddingTop="3%"/>
      <img src={MMImage} className="mainBodyImage" width="100%" alt="logo" />
      
      
      <Box marginLeft="22%" marginRight="15%" marginBottom="-2.5%">
        <Typography style={{textAlign: "left"}}>{introText}</Typography>
      </Box>
      
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Box marginLeft="10%" width="55%" marginTop="7%">
          <Typography style={{textAlign: "left"}}>{introText}</Typography>
        </Box>
        <img className="mmImg" src={PCBImage} alt="Micromouse PCB"/>
      </Grid>
      
      
      <Footer/>
    </div>
  );
}