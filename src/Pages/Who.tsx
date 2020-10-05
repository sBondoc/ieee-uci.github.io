import React from 'react';
import Header from '../Components/Header';
import {Typography, Box} from '@material-ui/core';
import Footer from '../Components/Footer';
import '../Styles/index.css'
import WhoTitle from '../images/about_ieee.svg'
import WhoImage from '../images/ieee_soldier.jpg'
import discordIcon from '../images/discordicon.png';
// import emailIcon from '../images/emailicon.png';
import fbIcon from '../images/facebookicon.png';
import igIcon from '../images/instagramicon.png';
import IconButton from '@material-ui/core/IconButton';
import {Grid} from '@material-ui/core';
import {SocialIcon} from '../Components/Footer';
// import {SubscribeBox} from '../Components/Footer';
import Popover from 'react-bootstrap/Popover';
// import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { TextField } from '@material-ui/core';
import Carousel from 'react-bootstrap/Carousel';
// import eventECP from '../images/ecp_fall_20.jpg';
import eventECF from '../images/ecf_fall_20.png';
import eventOPS from '../images/ops_fall_20.jpg';




const introText = `IEEE at UCI is one of UCI's premier Electrical
Engineering clubs. We strive to support the hard working engineering
and computer science community by providing students many ways to
network, gain insight on the industry, receive guidance on schoolwork,
and enjoy student life as an engineer.  The Institute of Electrical and Electronics Engineers at the
University of California, Irvine (UCI) is a professional student
organization aiming to promote the advancement of technology. Our goal is
to provide the students at UCI the resources to become successful in the
technology industry as well as provide a means of networking inside and
outside of the university.`

const getInvolvedText = "Under normal circumstances, our lab room at ICS 225 would be open on weekdays (and sometimes weekends) as a place to study, hang out or destress. However, seeing as it is currently closed, we invite you to join our Discord Server instead! The IEEE UCI Discord serves as the hub of all of our activities, including study help, career advice, workshops, socials, memes, and more. Join us on Discord and subscribe to our newsletter to stay up to date with our club and take advantage of all the resources we have to offer."

const membershipText = "If you wish to support our club as well as gain greater access to our equipment and resources, you can become an official IEEE UCI member for only $30 a year! This allows us to host more workshops and events, attend conferences such as SPAC and RLDC, and sponsor more projects. Full membership benefits include:"

const popover = (
  <Popover id="popover-basic" style={{backgroundColor: '#2A6AC6', height:"300px", width: "300px"}}>
    <Popover.Title as="h3" style={{  backgroundColor: '#2A6AC6', color: "white", textAlign:"center"}}>Subscribe to Our Newsletter</Popover.Title>
    <Popover.Content>
      <Box>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={{marginTop: "2vh", marginRight: "5%", marginBottom: "5vh"}}
        >
          <form action="https://formspree.io/xlepjdlk" method="POST">
              <TextField id="outlined-basic" label="E-mail"  variant="outlined" margin="dense" name="e-mail address"/>
              <TextField id="outlined-basic" label="First Name" variant="outlined" margin="dense" name="first name"/>
              <TextField id="outlined-basic" label="Last Name"  variant="outlined" margin="dense" name="last name"/>

              <button className="submit" type="submit" style={{marginLeft:'35%', marginTop: "5%", marginRight:'35%', width: '30%', fontSize: '100%', textAlign: 'center'}}>SUBMIT</button>
          </form>
        </Grid>
      </Box>
    </Popover.Content>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <IconButton> <MailOutlineIcon style={{color:'white'}}/> </IconButton>
  </OverlayTrigger>
);

export default function Who() {

  return(
    <div>
      <Header/>
      <Box className = "bkgdGrad"/>

      <img src={WhoTitle} style={{margin: '10% 5% 5%', width: '34%'}} className="whoTitle" alt = "Title"/>
      <div/>
      <Carousel style={{width: '48vw', marginTop:"0%", top: "20%", left: "5%", position:'sticky', boxShadow: "0 0 25px black"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={WhoImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={eventECF}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={eventOPS}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Box paddingTop="4%" paddingBottom="25vw" style={{marginLeft: "59%"}}>
        <Typography style={{top:"25vw", position: "absolute", marginRight: "5%"}} variant="h2">Who Are We?</Typography>
        <Typography style={{top:"30vw", paddingTop:"5%", position: "absolute", marginRight: "5%"}}>{introText}</Typography>
      </Box>


      <Box paddingTop="5%" paddingBottom="25vw" style={{position:'relative', marginLeft: "59%", marginRight: "5%"}}>
        <Typography variant="h2">Get Involved</Typography>
        <Typography style={{paddingTop:"5%", paddingBottom:"10%"}}>{getInvolvedText}</Typography>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          style={{marginLeft:"-10%", marginRight:"5%"}}>
          <Grid container item justify="center">
            <SocialIcon link="https://bit.ly/IEEE-UCI_Discord" src={discordIcon}/>
          </Grid>
          <Grid container direction = "row" justify="space-evenly">
            <SocialIcon link="https://www.facebook.com/IEEE.UCI/" src={fbIcon}/>
            <SocialIcon link="https://www.instagram.com/ieee_uci/" src={igIcon}/>
          </Grid>
          <Grid container item justify="center">
            <Example/>
          </Grid>

        </Grid>
      </Box>

      <Box paddingTop="5%" paddingBottom="25vw" style={{position:'relative', marginLeft: "59%", marginRight: "5%"}}>
        <Typography variant="h2">Membership</Typography>
        <Typography style={{paddingTop:"5%", paddingBottom: "5%"}}>{membershipText}</Typography>
        <ul>
          <li>Access to our Electrical Lab</li>
            <ul>
              <li>Soldering Stations</li>
              <li>Oscilloscopers</li>
              <li>Function Generators</li>
              <li>Power Supplies - Common Components and Tools</li>
            </ul>
          <li>Lab Computers and Printers</li>
            <ul>
              <li>Common engineering and CS software is installed. Lab managers can add new software on request.</li>
            </ul>
          <li>Project Lab Space & Storage</li>
            <ul>
              <li>Microwaves, Fridges, Freezer</li>
            </ul>
          <li>Students may request an IEEE project box to store hardware for class or personal projects.</li>
          <li>Access to members-only events like our IEEE United state-wide virtual career fair</li>
        </ul>
        <Typography>NOTE: Not being a paid member does NOT exclude you from workshops and programs such as OPS.</Typography>
        <Box style={{backgroundImage: "linear-gradient(to bottom, white, #c8d6eb", borderWidth: "1px", borderStyle: "solid", borderColor: "white", marginTop: "10%", padding:"5%", borderRadius:"2%"}}>
        <Typography variant="h4" style={{marginTop:"5%", paddingBottom: "5%", textAlign: "center", color: "black"}}><b>Become a Member: </b></Typography>
        <ol style={{fontSize:"120%", color: "black"}}>
          <li>Fill out our membership application here: <a href="http://bit.ly/IEEE-UCI_SignUp2020">http://bit.ly/IEEE-UCI_SignUp2020</a></li>
          <li>Send a payment of $25 to our venmo: ieee_uci with a comment including your name, uci email and Discord tag.</li>
          <li>Join our Discord community if you haven't already, and await a membership tag to be added to your name in our server.</li>
          <li>Your name will be checked on our roster when attending members-only events and accessing lab equipment. Welcome aboard!</li>
        </ol>
        </Box>
      </Box>

      <Footer/>
    </div>
  );
}
