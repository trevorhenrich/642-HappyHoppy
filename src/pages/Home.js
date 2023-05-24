import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  CardMedia,
  Card,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Home({ drinkData, drinkSet, favDrinks, setDrinkFav }) {
  const [data, setData] = useState(drinkData);
  const [counter, setCounter] = useState(0);
  const [thumb, setThumb] = useState(drinkData[0].strDrinkThumb);
  const [favs, setFavs] = useState(favDrinks);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(data);
    setData(drinkData);
  }, [data]);

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Card variant="outlined">
            <LocationOnIcon
              fontSize="large"
              onClick={() => {
                navigate("/location");
              }}
            />
          </Card>
        </Grid>
        <Grid item>
          <TextField label="Search"></TextField>
        </Grid>

        <Grid item>
          <Card variant="outlined">
            <LocalBarIcon
              fontSize="large"
              onClick={() => navigate("/mydrinks")}
            />
          </Card>
        </Grid>
      </Grid>

      <Box>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            paddingTop={10}
            component="img"
            sx={{
              height: 400,
              width: 400,
            }}
            alt={data[counter].strDrink}
            src={thumb}
          />
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item padding={5}>
            <Card>
              <CancelIcon fontSize="large" onClick={() => navigate("/")} />
            </Card>
          </Grid>

          <Grid item padding={5}>
            <Card>
              <CheckCircleIcon
                fontSize="large"
                onClick={() => {
                  // navigate("/mydrinks");
                  if (counter < 10) {
                    console.log(data[counter].strDrink);
                    console.log(counter);
                    setCounter(counter + 1);
                    //console.log(data[counter].strDrinkThumb);
                    setThumb(data[counter].strDrinkThumb);
                    setDrinkFav((favDrinks) => [...favDrinks, data[counter]]);
                  }
                  if (counter > 8) {
                    setCounter(0);
                  }
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
