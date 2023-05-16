import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {CardMedia, Card, Grid, IconButton, TextField, Typography} from "@mui/material";
import { Box } from "@mui/system";
import LocalBarIcon from '@mui/icons-material/LocalBar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from "react-router-dom";


export function Home() {
  const navigate = useNavigate();
  return <>

          <Box paddingTop={2}>
            <Grid container 
            spacing={10}
            direction="row"
            alignItems="center"
            justifyContent="center">
              <Grid item>
                <Card variant="outlined">
                <LocationOnIcon fontSize="large" onClick={()=>navigate("/location")}/>
                </Card>
              </Grid>
              <Grid item>
                <TextField label="Search">
                </TextField>
              </Grid>

              <Grid item>
                <Card variant="outlined">
                <LocalBarIcon fontSize="large" onClick={()=>navigate("/mydrinks")}/>
                </Card>
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
          direction="row"
          alignItems="center"
          justifyContent="center">

            <Grid item
            padding={5}>
                <Card>
                <CancelIcon fontSize="large" onClick={()=>navigate("/")}/>
                </Card>
            </Grid>

            <Grid item
            padding={5}>
            <Card>
            <CheckCircleIcon fontSize="large" onClick={()=>navigate("/mydrinks")}/>
            </Card>
            </Grid>
          </Grid>
          </Box>
          
  
  </>;
}

export default Home;
