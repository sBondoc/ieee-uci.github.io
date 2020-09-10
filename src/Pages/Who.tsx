import React from 'react';
import Header from '../Components/Header';
import {Typography, Box} from '@material-ui/core';
import Footer from '../Components/Footer';
import '../Styles/index.css'
import WhoTitle from '../images/about_ieee.svg'
import WhoImage from '../images/ieee_soldier.png'
import discordIcon from '../images/discordicon.png';
import emailIcon from '../images/emailicon.png';
import IconButton from '@material-ui/core/IconButton';
import {Grid} from '@material-ui/core';
import {SocialIcon} from '../Components/Footer';



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

export default function Who() {

  return(
    <div>
      <Header/>
      <img src={WhoTitle} style={{margin: '10% 5% 5%', width: '34%'}} className="whoTitle" alt = "Title"/>
      <div/>

      <img src={WhoImage} style={{width: '48vw', marginTop:"0%", top: "20%", left: "5%", position:'sticky'}} alt="IEEE Soldier"/>

      <Box paddingTop="4%" paddingBottom="25vw" style={{marginLeft: "59%"}}>
        <Typography style={{top:"25vw", position: "absolute", marginRight: "5%"}} variant="h2">who are we?</Typography>
        <Typography style={{top:"30vw", paddingTop:"5%", position: "absolute", marginRight: "5%"}}>{introText}</Typography>
      </Box>


      <Box paddingTop="5%" paddingBottom="25vw" style={{position:'relative', marginLeft: "59%", marginRight: "5%"}}>
        <Typography variant="h2">get involved</Typography>
        <Typography style={{paddingTop:"5%", paddingBottom:"10%"}}>{getInvolvedText}</Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center">
            <SocialIcon link="https://bit.ly/IEEE-UCI_Discord" src={discordIcon}/>
            <SocialIcon link="" src={emailIcon}/>

        </Grid>
      </Box>

      <Box paddingTop="5%" paddingBottom="25vw" style={{position:'relative', marginLeft: "59%", marginRight: "5%"}}>
        <Typography variant="h2">membership</Typography>
        <Typography style={{paddingTop:"5%"}}>{membershipText}</Typography>
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
        </ul>
      </Box>

      <Footer/>
    </div>
  );
}
