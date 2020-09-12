import React from 'react';
import Header from '../Components/Header';
import BoardTitle from '../images/about_board.svg'
import {Box} from '@material-ui/core';
import Footer from '../Components/Footer';
import groupImage from '../images/ieee_board_20.png'
import {Grid} from '@material-ui/core';


export default function Board() {

  return(
    <div>
      <Header/>
      <Box paddingTop="5%">
        <img src={groupImage} style={{marginLeft: '5%', marginTop: '7%', width: '90%'}} alt = "Group Photo"/>
      </Box>
      <Box paddingTop="5%" paddingBottom="5%">
        <img src={BoardTitle} style={{marginLeft: '5%', marginTop: '5%', width: '30%'}} className="boardTitle" alt = "Title"/>
      </Box>

      <Box className="flipContainer">
      <Grid container direction="column">
        <Grid className="flipRow" container item direction="row" justify="space-evenly">
          <Grid item>
            <div className= "flipCard"/> 
          </Grid>
          <Grid item>
            <div className= "flipCard"/>
          </Grid>
          <Grid item>
            <div className= "flipCard"/>
          </Grid>
        </Grid>
        <Grid className="flipRow" container item direction="row" justify="space-evenly">
          <Grid item>
            <div className= "flipCard"/>
          </Grid>
          <Grid item>
            <div className= "flipCard"/>
          </Grid>
          <Grid item>
            <div className= "flipCard"/>
          </Grid>
        </Grid>
        <Grid className="flipRow" container item direction="row" justify="space-evenly">
          <Grid item>
            <div className= "flipCard"/>
          </Grid>
          <Grid item>
            <div className= "flipCard"/>
          </Grid>
          <Grid item>
            <div className= "flipCard"/>
          </Grid>
        </Grid>
        <Grid className="flipRow" container item direction="row" justify="space-evenly">
          <Grid item>
            <div className= "flipCard"/>
          </Grid>
          <Grid item>
            <div className= "flipCard"/>
          </Grid>
        </Grid>
      </Grid>
      </Box>

      <Footer/>
    </div>
  );
}
