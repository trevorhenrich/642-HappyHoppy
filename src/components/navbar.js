import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
  const [value, setValue] = React.useState(0);

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
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="My Drinks" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Settings" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Box>
  );
}