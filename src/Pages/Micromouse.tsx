import React from 'react';
import Header from '../Components/Header';
import MMImage from '../images/micromouse_maze.svg';
import MMTitle from '../images/projects_micromouse.svg'
import PCBImage from '../images/mousepcb.jpg';
import {Typography, Box, Grid} from '@material-ui/core';
import Footer from '../Components/Footer';
import '../Styles/index.css'

const introText = "Micromouse is a robotics competition hosted by IEEE in which students design, develop, and program a robotic mouse to autonomously navigate a maze. While it sounds like an easy task, it will require your minds to perform at an extraordinary level as you start to apply the knowledge you acquire from coursework to the real test!";
const whoText = "We are a club that is geared towards promoting IEEE's Micromouse Competition and helping it grow at UCI. We will be having weekly meetings and build sessions to help students in groups of 1-5, build a micromouse. Our goal is to reach out to engineering and computer science students to teach them about the competition and design process, with the eventual hope of building the foundation for a successful Micromouse program here at UCI.";
export default function Micromouse() {

  return(
    <div>
      <Header/>
      <Box paddingTop="3%"/>
      <img src={MMImage} className="mainBodyImage" width="100%" alt="logo" />
      <img src={MMTitle} className="mmTitle" style={{margin: '0% 5% 5%', width: '60%'}} alt="title" />
      <Box marginLeft="25%" marginRight="15%" marginBottom="2.5%">
        <Typography style={{textAlign: "left"}}>{introText}</Typography>
      </Box>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Box marginLeft="5%" width="55%" marginTop="7%">
          <Typography style={{textAlign: "left"}}>{whoText}</Typography>
        </Box>
        <img className="mmImg" src={PCBImage} alt="Micromouse PCB"/>
      </Grid>


      <Footer/>
    </div>
  );
}
