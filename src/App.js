import TestComponent from "./components/test";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ProfileSettings } from "./pages/ProfileSettings";
import { MyDrinks } from "./pages/MyDrinks";
import { DrinkProfile } from "./pages/DrinkProfile";
import { Payment } from "./pages/Payment";
import { Delivery } from "./pages/Delivery";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ProfileSettings" element={<ProfileSettings />} />
        <Route path="/MyDrinks" element={<MyDrinks />} />
        <Route path="/DrinkProfile" element={<DrinkProfile />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Delivery" element={<Delivery />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
