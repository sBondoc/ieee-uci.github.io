import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {Box, Typography, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    backgroundColor: "rgb(33,32,40)",
  },
  text: {
    color: "white"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Arcade() {
  const classes = useStyles();


  return(
    <div>
      <Header/>
      <Box className="bkgdGrad" />
      <Box>
        <Typography variant="h4" style={{color:"white", paddingTop: "10%", paddingLeft: "5%"}}> Projects - Arcade Machine </Typography>
      </Box>


      <div className="container topc" style={{paddingTop: "5%", paddingRight: "10%", paddingLeft:"10%"}}>
        <br/>
        <p>
          These are some of the projects that members of IEEE are doing. If you have a project you would like to share, please fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8ZeYEHd9eVV1qe2C6EmVAYwN1AmIei1iA7igp8nwwsrsfNA/viewform" rel="noopener noreferrer" target="_blank">IEEE Project Proposal Form</a>. You can also contact us through <a href="https://join.slack.com/t/ieeeuci/shared_invite/enQtNjEyODM1MzA2NjMxLTE1NGIxN2E4MTU1MjRkY2I5MGM2YTgxNmFmY2RmMTI5OTAzMzE0YWUwZDE3YTkxNTJhNjMxYjM3YzI3MjhjNDk" target="blank">Slack</a> or visit our lab room, ICS 225, and we can help you out.<br />
        </p>
        <br/>
        <h4>Table of Contents</h4>
        <ul>
          <li><a /*click="scrollToElement(arcade)"*/ className="table-of-contents">Arcade Machine</a></li>
        </ul>
      </div>
      <div className="arcade_wrapper">
      <h3 style={{color:"white", paddingTop: "5%", textAlign:"center"}}>Arcade Machine Project Timeline</h3>
      <Timeline align="alternate" style={{paddingTop:"5%"}}>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="h6" color="textSecondary">
                  Week 1
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined">
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1" className={classes.text}>
                  </Typography>
                  <Typography className={classes.text}>We finally got our arcade machine in! The cabinet is in rough shape and it will need some work but it’s definitely in working condition. We got to play around with the original game before saying goodbye to it.</Typography>
                  <div className="slider">
                     <ul className="slides transparent">
                       <li>
                         <img src="img/arcade-project-pictures/Week1Pic1.jpg" alt="first slide"/>
                         <div className="caption center-align">
                         </div>
                       </li>
                       <li>
                         <img src="img/arcade-project-pictures/Week1Pic2.jpg" alt="second slide"/>
                       </li>
                     </ul>
                   </div>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="h6" color="textSecondary">
                  Week 2
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined">
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1" className={classes.text}>
                  </Typography>
                  <Typography className={classes.text}>We opened up the cabinet to look at everything inside… We have our work cut out for us. First thing we need to do is take out all the controls and the monitor.</Typography>
                  <div className="slider">
                     <ul className="slides transparent">
                       <li>
                        <img src="img/arcade-project-pictures/Week2Pic1.jpg" alt="first slide"/>
                       </li>
                       <li>
                         <img src="img/arcade-project-pictures/Week2Pic2.jpg" alt="second slide"/>
                       </li>
                       <li>
                        <img src="img/arcade-project-pictures/Week2Pic3.jpg" alt="first slide"/>
                       </li>
                       <li>
                        <img src="img/arcade-project-pictures/Week2Pic4.jpg" alt="first slide"/>
                       </li>
                       <li>
                        <img src="img/arcade-project-pictures/Week2Pic5.jpg" alt="first slide"/>
                       </li>
                     </ul>
                   </div>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h6" color="textSecondary">
                Week 3
              </Typography>
            </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined">
                </TimelineDot>
                <TimelineConnector/>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.text}>The cabinet is almost fully cleaned out. This week we finished taking out the monitor. This was pretty tricky. We had to make sure that we discharged the cathode ray tube and that we didn’t crack the monitor as we took it out. Safety is always first!!</Typography>
                  <div className="slider">
                     <ul className="slides transparent">
                       <li>
                        <img src="img/arcade-project-pictures/Week3Pic1.jpg" alt="first slide"/>
                       </li>
                       <li>
                         <img src="img/arcade-project-pictures/Week3Pic2.jpg" alt="second slide"/>
                       </li>
                     </ul>
                   </div>
                </Paper>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h6" color="textSecondary">
                Week 4
              </Typography>
            </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined">
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.text}>Now comes the boring stuff. We’re searching around for the parts that we will need: 2 joysticks and whole lot of buttons! When we get those in, we’ll start putting things together. We’ll be putting in a computer unit, monitor, speakers and lighting. The really fun part will come when we start writing the front-end software.</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

    </div>
    <Footer/>

    </div>
  );
}
