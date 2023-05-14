import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {CardMedia, Grid, IconButton, TextField, Typography} from "@mui/material";
import { Box } from "@mui/system";
import LocalBarIcon from '@mui/icons-material/LocalBar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';


export function Home() {
  return <>

          <Box paddingTop={2}>
            <Grid container 
            spacing={10}
            direction="row"
            alignItems="center"
            justifyContent="center">

              <Grid item>
                <LocationOnIcon fontSize="large"/>
              </Grid>

              <Grid item>
                <TextField label="Search">
                  
                </TextField>
              </Grid>

              <Grid item>
                <LocalBarIcon fontSize="large"/>
              </Grid>

            </Grid>
          </Box>
          <Box>
          <Grid container 
            direction="row"
            alignItems="center"
            justifyContent="center">

            <Box
            paddingTop={10}
            component="img"
            sx={{
              height: 400,
              width: 400,
            }}
            alt="Testing image"
            src="https://images.immediate.co.uk/production/volatile/sites/30/2023/04/Strawberry-Marg-c985252.jpg?quality=90&resize=556,505"
            />
          </Grid>
          
          <Grid container 
          paddingTop={10}
          direction="row"
          alignItems="center"
          justifyContent="center">


            <Grid item
            padding={5}>
                <CancelIcon fontSize="large"/>
            </Grid>

            <Grid item
            padding={5}>
            <CheckCircleIcon fontSize="large"/>
            </Grid>
          </Grid>
          </Box>
          
  
  </>;
}

export default Home;
