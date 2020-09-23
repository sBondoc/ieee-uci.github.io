import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import emailIcon from '../images/emailicon.png';
import fbIcon from '../images/facebookicon.png';
import igIcon from '../images/instagramicon.png';
import twitterIcon from '../images/twittericon.png';
import snapchatIcon from '../images/snapchaticon.png';
import linkedInIcon from '../images/linkedinicon.png';
import discordIcon from '../images/discordicon.png';
import githubIcon from '../images/githubicon.png';
import textBrace from '../images/textBrace.png';
import textEntry from '../images/textentry.png'
import IconButton from '@material-ui/core/IconButton';
import {Box, Grid} from '@material-ui/core';
import '../Styles/index.css';



const useStyles = makeStyles((theme) => ({
  socialMediaIcon: {
    width: "45%",
  },
  socialIconBox:{
    marginRight: theme.spacing(-8),
  },
  textFieldControl: {
    width: 200,
  }
}));

function SocialIcon(props: {src: string, link: string}){
  const classes = useStyles();

  return(
    <Box className={classes.socialIconBox}>
      <IconButton className={classes.socialMediaIcon} href={props.link} target="_blank">
        <img width="100%" src={props.src} alt="socialmediaicon"/>
      </IconButton>
    </Box>
  );
}

function SubscribeBox() {
  const classes = useStyles();

  return(
  <Box className = "subscribeBox">
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      style={{marginTop: "5%", marginRight: "5%", marginBottom: "5%"}}
    >
      <h3 style={{marginLeft:"-5%"}}>JOIN OUR MAILING LIST:</h3>
      <form action="https://formspree.io/xlepjdlk" method="POST">
          <label> E-mail Address <input type="text" name="e-mail address"/><img className="textentry" src={textEntry} alt="emailentry"/></label>
          <label> First Name <input type="text" name="first name"/><img className="textentry" src={textEntry} alt="fnameentry"/></label>
          <label> Last Name <input type="text" name="last name"/><img className="textentry" src={textEntry} alt="lnameentry"/></label>
          <button className="submit" type="submit" style={{marginLeft:'32%', marginRight:'35%', width: '30%', fontSize: '1.2vw', marginTop: '2%', textAlign: 'center'}}>SUBMIT</button>
      </form>
    </Grid>
  </Box>
  );
}

export {SocialIcon, SubscribeBox};

export default function Footer() {
  const classes = useStyles();

  return(
    <Box paddingTop="10%" className='footerBox'>

        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
        <Box paddingTop="4%" marginLeft="4%" className="footerIcons">
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
            <SocialIcon link="https://www.facebook.com/IEEE.UCI/" src={fbIcon}/>
            <SocialIcon link="https://www.instagram.com/ieee_uci/" src={igIcon}/>
            <SocialIcon link="https://www.linkedin.com/in/ieeeuci" src={linkedInIcon}/>
            <SocialIcon link="https://bit.ly/IEEE-UCI_Discord" src={discordIcon}/>
            <SocialIcon link="https://github.com/ieee-uci" src={githubIcon}/>

          </Grid>


          </Box>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
              style={{width: "30%", marginLeft: "-5%", marginRight: "5%", marginBottom: "5%"}}
            >
              <h2>JOIN OUR MAILING LIST:</h2>
              <form action="https://formspree.io/xlepjdlk" method="POST">
                  <label> E-mail Address <input type="text" name="e-mail address"/><img className="textentry" src={textEntry} alt="emailentry"/></label>
                  <label> First Name <input type="text" name="first name"/><img className="textentry" src={textEntry} alt="fnameentry"/></label>
                  <label> Last Name <input type="text" name="last name"/><img className="textentry" src={textEntry} alt="lnameentry"/></label>
                  <button className="submit" type="submit" style={{width: '95%', marginTop: '5%', textAlign: 'center'}}>Submit</button>
              </form>
            </Grid>
        </Grid>
    </Box>
  );
}
