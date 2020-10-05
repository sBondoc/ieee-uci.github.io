import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Box, Grid, Typography } from '@material-ui/core';

export default function Arcade() {
  return(
    <div>
      <Header/>
      <Box className="bkgdGrad" />
      <Box className = "headerBox">
        <Typography variant="h6"className="title">EVENTS</Typography>
        <Typography variant="h6" className="pageTitle"></Typography>
        <br/>
        <svg className="divider"/>
      </Box>

        <Grid
          container
          justify="flex-end"
          alignItems="center"
        >
          <Box paddingTop="0%" paddingRight="5%">
            <iframe title="calendar" className="calendar" src="https://calendar.google.com/calendar/b/4/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=aWVlZS51Y2lydmluZUBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=cmo3OTk4aWZwZjNvMDAyMnR1N2dlZzVsaGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dWNpY2x1YmFmZmlsaWF0ZXNAZ21haWwuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=bmV1aHR2NjVqNDNhOWZiZXVkbTE2MTFvbWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=aDFuMW83czllODExMnNzODBiZWFiaG5nOTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%237986CB&amp;color=%230B8043&amp;color=%23E4C441&amp;color=%23009688&amp;color=%23D50000&amp;color=%23E67C73&amp;mode=AGENDA" width="450" height="600" scrolling="no"></iframe>
          </Box>
        </Grid>
      <Footer/>
    </div>
  );
}
