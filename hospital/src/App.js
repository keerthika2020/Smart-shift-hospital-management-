import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import DoctorsList from "./components/homepage/DoctorsList";
import Login from "./components/homepage/Login";
import Register from "./components/homepage/Register";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import AmbulanceServices from "./pages/AmbulanceServices";
import MedicalServices from "./pages/MedicalServices";
import Pharmacy from "./pages/Pharmacy";
import WhyChooseUs from "./pages/WhyChooseUs";
import NewsAndArticles from "./pages/NewsAndArticles";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions"; // Import your new TermsConditions page


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors/:specialization" element={<DoctorsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/ambulance" element={<AmbulanceServices />} />
        <Route path="/medical-services" element={<MedicalServices />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/news-articles" element={<NewsAndArticles />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy /> } />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}

export default App;







































//import React from "react";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import { AppBar, Toolbar, Button, Grid, Typography } from "@mui/material";
//import { styled } from "@mui/system";
//import Home from "./components/Home";
//import DoctorsList from "./components/DoctorsList";
//import Login from "./components/Login";
//import Register from "./components/Register";
//import Specializations from "./components/Specializations";

//const StyledAppBar = styled(AppBar)({
 // backgroundColor: "#0F6A6B",
//});

//const Logo = styled(Typography)({
  //fontSize: "1.5rem",
  //fontWeight: "bold",
  //color: "#fff",
  //marginRight: "auto",
//});

//function App() {
 // return (
   // <Router>
//<StyledAppBar position="static">
       // <Toolbar>
       //   <Logo>The Vitality World of Lifecare</Logo>
        //  <Button color="inherit" component={Link} to="/login">
        //    Login
        //  </Button>
        //  <Button color="inherit" component={Link} to="/register">
        //    Sign Up
        //  </Button>
       // </Toolbar>
     // </StyledAppBar>

     // <Routes>
      //  <Route path="/" element={<Home />} />
      //<Route path="/specializations" element={<Specializations />} />
       // <Route path="/doctors/:specialization" element={<DoctorsList />} />
     //   <Route path="/login" element={<Login />} />
     ///   <Route path="/register" element={<Register />} />
     //   </Routes>
     //   </Router>  
 // );
//}

//export default App;
