import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
const [value, setValue] = React.useState(0);
const navigate = useNavigate();

  return (
    <Box sx={{ width: 500,  position: "fixed",
      bottom: 0}}>
<BottomNavigation
showLabels
value={value}
onChange={(event, newValue) => {
  setValue(newValue);
}}
>
<BottomNavigationAction onClick={()=>navigate("/")} label="Home" icon={<HomeIcon />} />
<BottomNavigationAction onClick={()=>navigate("/mydrinks")} label="My Drinks" icon={<FavoriteIcon />} />
<BottomNavigationAction onClick={()=>navigate("/profilesettings")} label="Settings" icon={<AccountCircleIcon />} />
</BottomNavigation>
    </Box>
  );
}

        
