import React from 'react';
import Header from '../Components/Header';
import BoardTitle from '../images/about_board.svg'
import {Box} from '@material-ui/core';
import Footer from '../Components/Footer';

export default function Board() {

  return(
    <div>
      <Header/>
      <Box paddingTop="5%">
      <img src={BoardTitle} style={{margin: '5% 5% 5%', width: '30%'}} className="boardTitle" alt = "Title"/>
      </Box>

      <Footer/>
    </div>
  );
}
