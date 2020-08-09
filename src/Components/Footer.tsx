import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import emailIcon from '../images/emailicon.png';
import fbIcon from '../images/facebookicon.png';
import igIcon from '../images/instagramicon.png';
import twitterIcon from '../images/twittericon.png';
import snapchatIcon from '../images/snapchaticon.png';
import linkedInIcon from '../images/linkedinicon.png';
import textBrace from '../images/textBrace.png';
import textEntry from '../images/textentry.png'
import IconButton from '@material-ui/core/IconButton';
import {Box, Grid} from '@material-ui/core';
import '../Styles/index.css';



const useStyles = makeStyles((theme) => ({
  socialMediaIcon: {
    width: "50%",
  },
  socialIconBox:{
    marginRight: theme.spacing(-8),
  },
  textFieldControl: {
    width: 200,
  }
}));

function SocialIcon(props: {src: string}){
  const classes = useStyles();

  return(
    <Box className={classes.socialIconBox}>
      <IconButton className={classes.socialMediaIcon}>
        <img width="100%" src={props.src} alt="socialmediaicon"/>
      </IconButton>
    </Box>
  );
}

export default function Footer() {
  const classes = useStyles();

  return(
    <Box paddingTop="10%">
        <img src={textBrace} width="80%" style={{transform: 'scaleX(-1)'}} alt="Brace"/>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
        <Box paddingTop="4%" marginLeft="4%">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Box className={classes.socialIconBox}>
              <IconButton className={classes.socialMediaIcon}>
                <a href="mailto:ieee.ucirvine@gmail.com">
                  <img width="100%" src={emailIcon} alt="mailicon"/>
                </a>
              </IconButton>
            </Box>
            <SocialIcon src={fbIcon}/>
            <SocialIcon src={twitterIcon}/>
            <SocialIcon src={igIcon}/>
            <SocialIcon src={snapchatIcon}/>
            <SocialIcon src={linkedInIcon}/>
          </Grid>
          

          </Box>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
              style={{width: "30%", marginLeft: "-5%", marginRight: "5%"}}
            >
              <h2 className="newsHead">JOIN OUR MAILING LIST:</h2>
              <form action="https://formspree.io/xlepjdlk" method="POST">
                  <label> E-mail Address <input type="text" name="e-mail address"/><img className="textentry" src={textEntry} alt="emailentry"/></label>
                  <label> First Name <input type="text" name="first name"/><img className="textentry" src={textEntry} alt="fnameentry"/></label>
                  <label> Last Name <input type="text" name="last name"/><img className="textentry" src={textEntry} alt="lnameentry"/></label>
                  <button className="submit" type="submit">Submit</button>
              </form>
            </Grid>
        </Grid>
    </Box>
  );
}