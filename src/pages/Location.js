import React from "react";
import {Grid} from "@mui/material";
import { Box } from "@mui/system";
import DrinksHeader from "../components/drinksheader";

export function Location(){
    return <>
    <DrinksHeader/>
    <Grid container 
            direction="row"
            alignItems="center"
            justifyContent="center">

            <Box
            paddingTop={5}
            component="img"
            sx={{
              height: 550,
              width: 400,
            }}
            alt="Testing image"
            src = "https://www.google.com/maps/d/u/0/thumbnail?mid=1BvzuRnURRSYg8oqH9lmoxjjf-xI&hl=en"
            />
          </Grid>
    </>;
}

export default Location;