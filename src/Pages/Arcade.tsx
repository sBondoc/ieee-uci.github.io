import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {Box} from '@material-ui/core';

export default function Arcade() {

  return(
    <div>
      <Header/>
      <Box className="bkgdGrad" />

      <Footer/>
    </div>
  );
}
