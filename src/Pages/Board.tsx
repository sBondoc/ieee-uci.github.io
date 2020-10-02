import React from 'react';
import Header from '../Components/Header';
import BoardTitle from '../images/about_board.svg'
import Footer from '../Components/Footer';
import groupImage from '../images/zoom_board.png';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import john from '../images/board/john.jpg';
import alan from '../images/board/alan.png';
import joel from '../images/board/joel.jpg';
import nathan from '../images/board/nathan.png';
import sam_b from '../images/board/sam_b.png';
import sam_d from '../images/board/sam_d.jpg';
import sienna from '../images/board/sienna.jpg';
import valen from '../images/board/valen.png';
import jlow from '../images/board/jlow.png';
import mitchell from '../images/board/mitchell.jpg';
import ryan from '../images/board/ryan.png';





export default function Board() {

  return(
    <div>
      <Header/>
      <Box className="bkgdGrad" />

      <Box style={{backgroundImage:"linear-gradient(to bottom, white, #dadfe2, #aab8c4)"}}>
        <img src={groupImage} style={{marginLeft: '5%', marginTop: '-18%', width: '90%', clipPath: 'inset(32% 0% 32% 0%)'}} alt = "Group Photo"/>
      </Box>
      <Box style={{paddingTop:"-35%", paddingBottom:"5%"}}>
        <img src={BoardTitle} style={{marginLeft: '5%', marginTop: '-30%', width: '30%', filter:"drop-shadow(-2px -2px 10px grey)"}} className="boardTitle" alt = "Title"/>
      </Box>

      <Box className="flipContainer">
      <Grid container direction="column">
        <Grid className="flipRow" container item direction="row" justify="space-evenly">
          <Grid item>
            <div className= "flipCard">
              <img  className= "flipImage" src={nathan} alt = "Nathan"/>
            </div>
            <Typography variant="h5" className="flipName"> Nathan Bernardo </Typography>
            <Typography variant="h6" className="flipPosition"> President </Typography>

          </Grid>
          <Grid item>
            <div className= "flipCard">
              <img  className= "flipImage" src={alan} alt = "Alan"/>
            </div>
            <Typography variant="h5" className="flipName"> Alan Wong </Typography>
            <Typography variant="h6" className="flipPosition"> Vice President </Typography>

          </Grid>
          <Grid item>
            <div className= "flipCard">
              <img  className= "flipImage" style={{width:"130%", marginLeft: "-17%", marginTop:"-40%"}} src={sienna} alt = "Sienna"/>
            </div>
            <Typography variant="h5" className="flipName"> Sienna Brown </Typography>
            <Typography variant="h6" className="flipPosition"> Treasurer </Typography>

          </Grid>
        </Grid>
        <Grid className="flipRow" container item direction="row" justify="space-evenly">
          <Grid item>
            <div className= "flipCard">
              <img  className= "flipImage" src={john} alt = "John"/>
            </div>
            <Typography variant="h5" className="flipName"> John Yu </Typography>
            <Typography variant="h6" className="flipPosition"> Secretary </Typography>

          </Grid>
          <Grid item>
            <div className= "flipCard">
              <img  className= "flipImage" style={{width:"150%", marginLeft: "-27%", marginTop:"-40%"}} src={sam_d} alt = "Sam Deans"/>
            </div>
            <Typography variant="h5" className="flipName"> Samuel Deans </Typography>
            <Typography variant="h6" className="flipPosition"> Lab Manager </Typography>

          </Grid>
          <Grid item>
            <div className= "flipCard">
              <img  className= "flipImage" src={joel} alt = "Joel"/>
            </div>
            <Typography variant="h5" className="flipName"> Joel Ledezma </Typography>
            <Typography variant="h6" className="flipPosition"> Lab Manager </Typography>

          </Grid>
        </Grid>
        <Grid className="flipRow" container item direction="row" justify="space-evenly">
          <Grid item>
            <div className= "flipCard">
              <img  className= "flipImage" src={valen} alt = "Valen"/>
            </div>
            <Typography variant="h5" className="flipName"> Valen Yamamoto </Typography>
            <Typography variant="h6" className="flipPosition"> Project Coordinator </Typography>

          </Grid>
          <Grid item>
            <div className= "flipCard">
              <img  className= "flipImage" style={{width:"140%", marginLeft: "-18%", marginTop:"-60%"}} src={jlow} alt = "Jonathan"/>
            </div>
            <Typography variant="h5" className="flipName"> Jonathan Low </Typography>
            <Typography variant="h6" className="flipPosition"> Project Coordinator </Typography>

          </Grid>
          <Grid item>
            <div className= "flipCard">
              <img  className= "flipImage" src={mitchell} alt = "Mitchell"/>
            </div>
            <Typography variant="h5" className="flipName"> Mitchell Wu </Typography>
            <Typography variant="h6" className="flipPosition"> Industry Correspondent </Typography>

          </Grid>
        </Grid>
        <Grid className="flipRow" container item direction="row" justify="space-evenly">
          <Grid item>
            <div className= "flipCard">
              <img  className= "flipImage" src={sam_b} alt = "Sam Bondoc"/>
            </div>
            <Typography variant="h5" className="flipName"> Samuel Bondoc </Typography>
            <Typography variant="h6" className="flipPosition"> Media Coordinator </Typography>

          </Grid>
          <Grid item>
            <div className= "flipCard">
              <img  className= "flipImage" src={ryan} alt = "Ryan"/>
            </div>
            <Typography variant="h5" className="flipName"> Ryan Chum </Typography>
            <Typography variant="h6" className="flipPosition"> Media Coordinator </Typography>

          </Grid>
        </Grid>
      </Grid>
      </Box>

      <Footer/>
    </div>
  );
}
