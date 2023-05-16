import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ProfileSettings } from "./pages/ProfileSettings";
import { Location } from "./pages/Location";  
import { MyDrinks } from "./pages/MyDrinks";
import { DrinkProfile } from "./pages/DrinkProfile";
import { Payment } from "./pages/Payment";
import { Delivery } from "./pages/Delivery";
import Navbar from "./components/navbar";
import { createTheme } from "@mui/material";
import { Box } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});


function App() {
  return (
    <>
      <Box sx={{width: 500, position: "fixed"}}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ProfileSettings" element={<ProfileSettings />} />
          <Route path="/MyDrinks" element={<MyDrinks />} />
          <Route path="/DrinkProfile/:id/:name" element={<DrinkProfile />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Delivery" element={<Delivery />} />
        </Routes>
      </Box>
      <Navbar />
    
    </>
  );
}

export default App;
