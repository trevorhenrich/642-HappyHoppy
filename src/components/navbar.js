import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Grid, IconButton } from '@mui/material';

export default function Navbar() {
const [value, setValue] = React.useState(0);
const navigate = useNavigate();

  return (
    <AppBar>
      <Grid 
      container 
      direction="row" 
      sx={{position: "fixed", bottom: 0}}
      
      >
        <Grid   container
        direction="column"
        alignItems="center"
        justifyContent="center" 
        item xs={4} >
          
      <IconButton onClick={()=>navigate("/")} >
        <HomeIcon/>
      </IconButton>
        </Grid>

        <Grid   container
        direction="column"
        alignItems="center"
        justifyContent="center" 
        item xs={4} >
          
      <IconButton onClick={()=>navigate("/mydrinks")} >
        <FavoriteIcon/>
    </IconButton>
        </Grid>

        <Grid   container
        direction="column"
        alignItems="center"
        justifyContent="center" 
        item xs={4} >
          
      <IconButton onClick={()=>navigate("/login")}>
        <AccountCircleIcon/>
      </IconButton>
        </Grid>

      </Grid>
    </AppBar>
  );
}

        

//     <BottomNavigation
//       showLabels
//       value={value}
//       onChange={(event, newValue) => {
//         setValue(newValue);
// }}
// >

//       <BottomNavigationAction onClick={()=>navigate("/")} label="Home" icon={<HomeIcon />} />
//       <BottomNavigationAction onClick={()=>navigate("/mydrinks")} label="My Drinks" icon={<FavoriteIcon />} />
//       <BottomNavigationAction onClick={()=>navigate("/login")} label="Account" icon={<AccountCircleIcon />} />
//     </BottomNavigation>