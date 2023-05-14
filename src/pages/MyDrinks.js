import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Grid, TextField, Typography} from "@mui/material";
import { Box } from "@mui/system";
import LocalBarIcon from '@mui/icons-material/LocalBar';

export function MyDrinks() {
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
            alignItems="left"
            justifyContent="center"
            sx={{ Color : "red"}}>
              <Grid item padding={5}>
                <img src = "https://www.tasteofhome.com/wp-content/uploads/2018/03/Apple-Amaretto-Sours_EXPS_THCA18_188779_C01_23_3b.jpg?resize=100,100"></img>
                <div>Title</div>
                <div>Location</div>
                <div>Description</div>
              </Grid>
              <Grid item padding={5}>
                <img src = "https://www.tasteofhome.com/wp-content/uploads/2018/03/Apple-Amaretto-Sours_EXPS_THCA18_188779_C01_23_3b.jpg?resize=100,100"></img>
                <div>Title</div>
                <div>Location</div>
                <div>Description</div>
              </Grid>
              <Grid item padding={5}>
                <img src = "https://www.tasteofhome.com/wp-content/uploads/2018/03/Apple-Amaretto-Sours_EXPS_THCA18_188779_C01_23_3b.jpg?resize=100,100"></img>
                <div>Title</div>
                <div>Location</div>
                <div>Description</div>
              </Grid>
              <Grid item padding={5}>
                <img src = "https://www.tasteofhome.com/wp-content/uploads/2018/03/Apple-Amaretto-Sours_EXPS_THCA18_188779_C01_23_3b.jpg?resize=100,100"></img>
                <div>Title</div>
                <div>Location</div>
                <div>Description</div>
              </Grid>
      
          </Grid>
          </Box>
  </>;
}

export default MyDrinks;
