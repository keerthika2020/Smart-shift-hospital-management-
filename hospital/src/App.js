import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DoctorsList from "./components/DoctorsList";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors/:specialization" element={<DoctorsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
