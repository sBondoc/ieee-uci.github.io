import React from 'react';
import Header from '../Components/Header';
import {Typography, Box, Grid} from '@material-ui/core';
import Footer from '../Components/Footer';
import '../Styles/index.css'

const introText = "Through IEEE at UCI's Open Project Space (OPS) program, participants will learn the basics of hardware-software integration using Arduino kits we deliver to work on at home.";
export default function OPS() {

  return(
    <div style={{overflow:"hidden"}}>
      <Header/>
      <Box className = "bkgdGrad"/>
      <Box className = "headerBox">
        <Typography variant="h6"className="title"> PROJECTS</Typography>
        <Typography variant="h6" className="pageTitle"> OPS</Typography>
        <br/>
        <svg className="divider"/>
      </Box>
      <Grid container direction="column" alignItems="center" spacing={8}>
        <Grid container item direction="row" justify="space-evenly" alignItems="center" >
          <Grid item sm={7}>
            <Typography variant="h3" style={{marginBottom: "5%", letterSpacing:"4px"}}>what is ops?</Typography>
            <Typography style={{textAlign: "left"}}>{introText}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Footer/>
    </div>
  );
}
