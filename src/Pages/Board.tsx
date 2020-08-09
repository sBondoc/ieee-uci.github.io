import React from 'react';
import Header from '../Components/Header';
import boardBrace from '../images/boardBrace.png'
import {Box} from '@material-ui/core';
import Footer from '../Components/Footer';

export default function Home() {

  return(
    <div>
      <Header/>
      <Box paddingTop="5%" paddingLeft="2%">
        <img src={boardBrace} className="mainBodyImage" width="40%" alt="logo" />
      </Box>
      
      <Footer/>
    </div>
  );
}