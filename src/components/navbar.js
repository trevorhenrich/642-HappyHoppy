import * as React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Box, Grid, IconButton } from "@mui/material";

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar>
        <Grid
          container
          direction="row"
          sx={{ bgcolor: "white", position: "fixed", bottom: 0 }}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            item
            xs={4}
          >
            <IconButton onClick={() => navigate("/")}>
              <HomeIcon />
            </IconButton>
          </Grid>

          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            item
            xs={4}
          >
            <IconButton onClick={() => navigate("/mydrinks")}>
              <FavoriteIcon />
            </IconButton>
          </Grid>

          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            item
            xs={4}
          >
            <IconButton onClick={() => navigate("/login")}>
              <AccountCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
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
