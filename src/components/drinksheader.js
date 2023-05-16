import React, { useState, useEffect } from "react";
import {Box, Card, Grid, TextField, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";


function DrinksHeader() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  return (
      <>
            <Box paddingTop={2} >
            <Grid container direction="row" 
            alignItems="center"
            justifyContent="center">

              <Grid item xs={6}> 
                <Card>
                <ArrowBackIcon fontSize="large" onClick={()=>navigate("/")}/>
                </Card>
              </Grid>
              <Grid item>

              </Grid>

              <Grid item> 
                <Card>
                <TuneIcon fontSize="large" onClick={()=>navigate("/profilesettings")}/>
                </Card>
              </Grid>

            </Grid>
          </Box>
      </>
  );
}

export default DrinksHeader;