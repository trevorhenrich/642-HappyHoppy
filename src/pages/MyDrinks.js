import React from "react";
import {Card, Grid, TextField, Typography} from "@mui/material";
import { Box } from "@mui/system";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function MyDrinks() {
  return <>
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

          <Box> 
          <Grid container direction="column" alignItems="left" justifyContent="center">
              <Grid item padding={2}>
                <Card>
                <Grid container direction="row" alignItems="left" >
                <img src = "https://www.tasteofhome.com/wp-content/uploads/2018/03/Apple-Amaretto-Sours_EXPS_THCA18_188779_C01_23_3b.jpg?resize=100,100"></img>
                <div classname="title" style={{fontSize : "x-large"}}>
                  <Typography paddingLeft={2} variant="h4">Title</Typography>
                </div>
                </Grid>

                <div classname="desc" style={{fontSize : "medium"}}>
                  <Typography>Description</Typography>
                </div>

                </Card>
              </Grid>
          </Grid>


          <Grid container direction="column" alignItems="left" justifyContent="center">
              <Grid item padding={2}>
                <Card>
                <Grid container direction="row" alignItems="left" >
                <img src = "https://www.tasteofhome.com/wp-content/uploads/2018/03/Apple-Amaretto-Sours_EXPS_THCA18_188779_C01_23_3b.jpg?resize=100,100"></img>
                <div classname="title" style={{fontSize : "x-large"}}>
                  <Typography paddingLeft={2} variant="h4">Title</Typography>
                </div>
                </Grid>

                <div classname="desc" style={{fontSize : "medium"}}>
                  <Typography>Description</Typography>
                </div>

                </Card>
              </Grid>
          </Grid>

          <Grid container direction="column" alignItems="left" justifyContent="center">
              <Grid item padding={2}>
                <Card>
                <Grid container direction="row" alignItems="left" >
                <img src = "https://www.tasteofhome.com/wp-content/uploads/2018/03/Apple-Amaretto-Sours_EXPS_THCA18_188779_C01_23_3b.jpg?resize=100,100"></img>
                <div classname="title" style={{fontSize : "x-large"}}>
                  <Typography paddingLeft={2} variant="h4">Title</Typography>
                </div>
                </Grid>

                <div classname="desc" style={{fontSize : "medium"}}>
                  <Typography>Description</Typography>
                </div>

                </Card>
              </Grid>
          </Grid>

          <Grid container direction="column" alignItems="left" justifyContent="center">
              <Grid item padding={2}>
                <Card>
                <Grid container direction="row" alignItems="left" >
                <img src = "https://www.tasteofhome.com/wp-content/uploads/2018/03/Apple-Amaretto-Sours_EXPS_THCA18_188779_C01_23_3b.jpg?resize=100,100"></img>
                <div classname="title" style={{fontSize : "x-large"}}>
                  <Typography paddingLeft={2} variant="h4">Title</Typography>
                </div>
                </Grid>

                <div classname="desc" style={{fontSize : "medium"}}>
                  <Typography>Description</Typography>
                </div>

                </Card>
              </Grid>
          </Grid>

          </Box>
  </>;
}

export default MyDrinks;
