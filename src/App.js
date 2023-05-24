import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [data, setData] = useState("");
  const [favs, setFavs] = useState("");

  const getData = async () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        setData((data) => [...data, res.data.drinks[0]]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      getData();
    }
  }, []);

  return (
    <>
      <Box>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                drinkData={data}
                drinkSet={setData}
                favDrinks={favs}
                setDrinkFav={setFavs}
              />
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ProfileSettings" element={<ProfileSettings />} />
          <Route path="/MyDrinks" element={<MyDrinks favDrinks={favs} />} />
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
