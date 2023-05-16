import React from "react";
import {Box, Card, Grid, TextField, Typography} from "@mui/material";

import { useNavigate } from "react-router-dom";

import DrinksHeader from "../components/drinksheader";
import CardActionArea from '@mui/material/CardActionArea';

export function MyDrinks() {
  const navigate = useNavigate();
  return <>
        <DrinksHeader/>
          <Box> 
          <Grid container direction="column" alignItems="left" justifyContent="center">
              <Grid item padding={2}>
                <Card> 
                  <CardActionArea onClick={()=>navigate("/drinkprofile/1/Martini")}>
                  <Grid container direction="row" alignItems="left" >
                  <img src = "https://www.tasteofhome.com/wp-content/uploads/2018/03/Apple-Amaretto-Sours_EXPS_THCA18_188779_C01_23_3b.jpg?resize=100,100"></img>
                  <div classname="title" style={{fontSize : "x-large"}}>
                  <Typography paddingLeft={2} variant="h4">Title</Typography>
                  </div>
                  <div classname="desc" style={{fontSize : "medium"}}>
                  <Typography paddingLeft={2}>Description
                  <br></br>
                  lorem ipsum dolor sit amet,
                  <br></br>
                  consectetur adipiscing elit.
                  </Typography>
                  </div>
                </Grid>
                </CardActionArea>
                </Card>
              </Grid>
          </Grid>


          <Grid container direction="column" alignItems="left" justifyContent="center">
              <Grid item padding={2}>
              <Card> 
                  <CardActionArea onClick={()=>navigate("/drinkprofile/2/Gin and tonic")}>

                <Grid container direction="row" alignItems="left" >
                <img src = "https://www.tasteofhome.com/wp-content/uploads/2018/03/Apple-Amaretto-Sours_EXPS_THCA18_188779_C01_23_3b.jpg?resize=100,100"></img>
                <div classname="title" style={{fontSize : "x-large"}}>
                  <Typography paddingLeft={2} variant="h4">Title</Typography>
                </div>

                <div classname="desc" style={{fontSize : "medium"}}>
                <Typography paddingLeft={2}>Description
                  <br></br>
                  lorem ipsum dolor sit amet,
                  <br></br>
                  consectetur adipiscing elit.
                  </Typography>
                </div>
                </Grid>
                </CardActionArea>
                </Card>
              </Grid>
          </Grid>

          <Grid container direction="column" alignItems="left" justifyContent="center">
              <Grid item padding={2}>
              <Card> 
                  <CardActionArea onClick={()=>navigate("/drinkprofile/3/Margarita")}>

                <Grid container direction="row" alignItems="left" >
                <img src = "https://www.tasteofhome.com/wp-content/uploads/2018/03/Apple-Amaretto-Sours_EXPS_THCA18_188779_C01_23_3b.jpg?resize=100,100"></img>
                <div classname="title" style={{fontSize : "x-large"}}>
                  <Typography paddingLeft={2} variant="h4">Title</Typography>
                </div>
                

                <div classname="desc" style={{fontSize : "medium"}}>
                <Typography paddingLeft={2}>Description
                  <br></br>
                  lorem ipsum dolor sit amet,
                  <br></br>
                  consectetur adipiscing elit.
                  </Typography>
                </div>
                </Grid>
                </CardActionArea>
                </Card>
              </Grid>
          </Grid>

          <Grid container direction="column" alignItems="left" justifyContent="center">
              <Grid item padding={2}>
              <Card> 
                  <CardActionArea onClick={()=>navigate("/drinkprofile/4/Old Fashioned")}>

                <Grid container direction="row" alignItems="left" >
                <img src = "https://www.tasteofhome.com/wp-content/uploads/2018/03/Apple-Amaretto-Sours_EXPS_THCA18_188779_C01_23_3b.jpg?resize=100,100"></img>
                <div classname="title" style={{fontSize : "x-large"}}>
                  <Typography paddingLeft={2} variant="h4">Title</Typography>
                </div>

                <div classname="desc" style={{fontSize : "medium"}}>
                <Typography paddingLeft={2}>Description
                  <br></br>
                  lorem ipsum dolor sit amet,
                  <br></br>
                  consectetur adipiscing elit.
                  </Typography>
                </div>
                </Grid>
                </CardActionArea>
                </Card>
              </Grid>
          </Grid>

          </Box>
  </>;
}

export default MyDrinks;
