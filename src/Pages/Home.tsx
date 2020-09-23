import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import mainImage from '../images/hex_home.png';
import banner from '../images/home_about_banner.svg'
import kellyWeb from '../images/ws_kelly.png';
import jackWeb from '../images/ws_jack.png';
import salWeb from '../images/ws_salvador.png';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import Footer from '../Components/Footer';
import {SubscribeBox} from '../Components/Footer';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import IconButton from '@material-ui/core/IconButton';
import '../Styles/index.css';

const introText = `IEEE at UC Irvine is a student organization
dedicated to providing students opportunities to gain hands-on
experience with projects in preparation for the real-world.
Through our organization, student will be able to explore the
field of engineering and hone new skills that are fundamental to
developing state-of-the-art technology.  We are
dedicated to helping students become the succesful engineer they envision
themselves to be so that they can advance technology for humanity in
their own passion.`;

const images = [
  {
    url: kellyWeb,
    title: 'Kelly Lue',
    width: '55%',
    place: "1st",
    webURL: "https://kellylue.github.io/",
    index: 0,
  },
  {
    url: jackWeb,
    title: 'Jack Whittaker',
    width: '55%',
    place: "2nd",
    webURL: "https://jackw01.github.io/",
    index: 1,
  },
  {
    url: salWeb,
    title: 'Salvador Villalon',
    width: '55%',
    place: "3rd",
    webURL: "https://salvillalon45.github.io/",
    index: 2,
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  activePlace:{
    color: "white"
  },
  inactivePlace:{
    color: "grey"
  },
  cardRibbon: {
    position: 'absolute',
    background: 'linear-gradient(to top, #00c6fb, #005bea)',
    width: "15%",
    height: "100%",
    left: 0,
  },
  image: {
    position: 'relative',
    width: "100%",
    height: 350,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  cardTextControl: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 200,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function Home() {
  const classes = useStyles();

  const [websiteActive, setWebsiteActive] = React.useState([true, false, false]);
  const [activeWeb, setActiveWeb] = React.useState(images[0]);

  const setPlace = (index: number) => {
    let temp = [false, false, false];
    temp[index] = true;
    setWebsiteActive(temp);
    setActiveWeb(images[index]);
  };

  return(
    <div>
      <Header/>
      <Box className="bkgdGrad" />
      <Box style={{position: 'relative', textAlign: 'center', paddingBottom: '15vw'}}>
        <img src={mainImage} className="mainBodyImage" alt="logo" style={{position: 'relative', opacity: "100%", width: '80%', top: '7vw', left: '-1%'}}/>
        <Typography variant="h4" className="advanceText" style={{position: 'absolute', fontSize: '2vw', letterSpacing: '5px', top: '46%', left:'50%', transform: 'translate(-50%, 0%)'}}><b>ADVANCING TECHNOLOGY<br/>FOR HUMANITY</b></Typography>
      </Box>
      <Box className="introBox">
        <Box style={{position:'absolute', width: '48%', top: '0%', left: '5%'}}>
          <Typography className='mainAboutText' style={{textAlign: "left", position: 'absolute', fontSize: "1.2vw", marginTop: '9%', marginBottom:'10%', marginRight: '5%'}}>{introText}</Typography>
        </Box>
        <SubscribeBox/>

      </Box>
      <Box paddingLeft="15%" paddingTop="20%" paddingBottom="10%">
        <Typography >/ SPRING 2020</Typography>
        <Box paddingTop="2%" paddingBottom="2%">
          <Typography variant="h5">Website Design Competition Winners</Typography>
        </Box>
      </Box>



      <Box style={{position:'relative', marginTop: "25%"}}>
        <Box className="webBanner" marginBottom="10%" marginTop="-30%">
        <ButtonBase
          focusRipple
          key={activeWeb.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "40%",
            position: "sticky",
            marginTop: "4%",
            left: "12%",
            top: "15%",
            boxShadow: "0px 5px  20px black"
          }}
          href={activeWeb.webURL}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${activeWeb.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span >
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {activeWeb.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>

        </ButtonBase>

        </Box>
      </Box>

      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
      <div className={classes.root} style={{marginTop:"-50vw", paddingLeft:"15%"}}>
        {images.map((image) => (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Box >
              <Button
                onClick={() => {setPlace(image.index)}}
                className={(websiteActive[image.index]) ?
                  classes.activePlace : classes.inactivePlace
                }
              >
                {image.place} {image.title}
              </Button>
            </Box>
          </Grid>
        ))}
      </div>
      </Grid>
      <Footer/>
    </div>
  );
}
