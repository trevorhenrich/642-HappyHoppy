import React, { useState, useEffect } from "react";
import {Box, Card, Grid, TextField, Typography} from "@mui/material";


import LocationOnIcon from '@mui/icons-material/LocationOn';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function DrinksHeader() {
  const [data, setData] = useState([]);


  return (
      <>
      
            <Box paddingTop={2} >
            <Grid container direction="row" 
            alignItems="center"
            justifyContent="center">

              <Grid item xs={6}> 
                <ArrowBackIcon fontSize="large"/>
              </Grid>
              <Grid item>

              </Grid>

              <Grid item> 
                <TuneIcon fontSize="large"/>
              </Grid>

            </Grid>
          </Box>
      </>
  );
}

export default DrinksHeader;