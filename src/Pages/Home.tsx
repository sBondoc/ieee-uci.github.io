import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Components/Header';
import mainImage from '../images/robot_hand.svg';
import banner from '../images/home_about_banner.svg'
import kellyWeb from '../images/ws_kelly.png';
import jackWeb from '../images/ws_jack.png';
import salWeb from '../images/ws_salvador.png';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Typography, Box, Grid} from '@material-ui/core';
import Footer from '../Components/Footer';
import '../Styles/index.css';

const introText = `IEEE at UC Irvine is a student organization
dedicated to providing students opportunities to gain hands-on
experience with projects in preparation for the real-world.
Through our organization, student will be able to explore the
field of engineering and hone new skills that are fundamental to
developing state-of-the-art technology.  Our organization is
dedicated to helping students become the succesful engineer they envision
themselves to be so that they can advance technology for humanity in
their own passion.`;

const images = [
  {
    url: kellyWeb,
    title: 'Kelly Lue',
    width: '55%',
    place: "1",
    webURL: "https://kellylue.github.io/"
  },
  {
    url: jackWeb,
    title: 'Jack Whittaker',
    width: '55%',
    place: "2",
    webURL: "https://jackw01.github.io/"
  },
  {
    url: salWeb,
    title: 'Salvador Villalon',
    width: '55%',
    place: "3",
    webURL: "https://salvillalon45.github.io/"
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
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

  return(
    <div>
      <Header/>
      <img src={mainImage} className="mainBodyImage" alt="logo" style={{width: '85%', height:'auto', position: 'relative', marginTop: '8%', left: '2%'}}/>
      <Box marginTop={-55} paddingBottom={55}>
        <Typography variant="h4" style={{textAlign: "center", position: 'absolute', fontSize: '3vw', marginTop: '10%', left: '20%'}}>ADVANCING TECHNOLOGY FOR HUMANITY</Typography>
      </Box>
      <Box style={{position:'relative'}}>
        <img src={banner} width="100%" alt="Brace"/>
        <Box style={{position:'absolute', width: '70%', top: '20%', bottom: '5%', left: '15%'}}>
          <Typography className='mainAboutText' style={{textAlign: "center", position: 'absolute', fontSize: '1.3vw', padding: '5%'}}>{introText}</Typography>
        </Box>
      </Box>
      <Box paddingTop="20%" paddingBottom="10%">
        <Typography variant="h5" style={{textAlign: "center"}}>SPRING 2020 WEBSITE COMPETITION WINNERS</Typography>
      </Box>


      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
      <div className={classes.root}>
      {images.map((image) => (
        <Box marginLeft="31%" marginBottom="4%">
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          href={image.webURL}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
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
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
          <Box className={classes.cardRibbon}><Typography className={`card-text ${classes.cardTextControl}`}>{image.place}</Typography></Box>

        </ButtonBase>

        </Box>
      ))}
        </div>
      </Grid>
      <Footer/>
    </div>
  );
}
