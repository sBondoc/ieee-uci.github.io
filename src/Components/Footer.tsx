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
import diamond from '../images/ieee_diamond.svg';
import IconButton from '@material-ui/core/IconButton';
import {Typography, Box, Grid, TextField} from '@material-ui/core';
import '../Styles/index.css';



const useStyles = makeStyles((theme) => ({
  socialMediaIcon: {
    width: "5vw",
  },
  socialIconBox:{
    marginRight: theme.spacing(-8),
  },
  textFieldControl: {
    width: 200,
  },

}));

function SocialIcon(props: {src: string, link: string}){
  const classes = useStyles();

  return(
    <Box className={classes.socialIconBox}>
      <IconButton className="socialIcon" href={props.link} target="_blank">
        <img width="100%" src={props.src} alt="socialmediaicon"/>
      </IconButton>
    </Box>
  );
}

function SubscribeBox() {

  return(
  <Box >
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
      <h5 style={{marginTop: "5%",marginBottom:"2%", textAlign:"center", letterSpacing:"2px"}}>Subscribe to our Mailing List:</h5>
      <form action="https://formspree.io/xlepjdlk" method="POST">
          <TextField id="outlined-basic" label="E-mail"  variant="outlined" margin="dense" className="textInput" name="e-mail address"/>
          <TextField id="outlined-basic" label="First Name" variant="outlined" margin="dense" className="textInput" name="first name"/>
          <TextField id="outlined-basic" label="Last Name"  variant="outlined" margin="dense" className="textInput" name="last name"/>

          <button className="submit" type="submit" style={{marginTop: "5%", width: '30%', fontSize: '100%', textAlign: 'center'}}>Submit</button>
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
            alignItems="center"
            lg={8}
            style={{padding:"4%"}}
            >
            <img src={diamond} style={{width:"20%"}}/>
            <Box style={{}}>
              <Typography variant="h5" style={{textAlign:"left", marginLeft:"4%", whiteSpace:"nowrap"}}><b>IEEE Student Branch <br/> University of California, Irvine</b></Typography>
              <Typography style={{borderStyle:"solid", borderColor:"white", borderWidth:"0px", marginTop:"4%", marginLeft:"4%", padding:"5px 10px 5px 10px"}}>ICS 225 Irvine CA, 92617 <br/> ieee.ucirvine@gmail.com</Typography>
            </Box>
          </Grid>

        <Box style={{width:"30%", marginLeft:"auto", marginRight:"auto"}}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={7}
            style={{width:"100%", paddingBottom:"4%"}}
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

    </Box>
  );
}
