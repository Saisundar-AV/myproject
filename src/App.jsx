import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "../Components/Navbar.jsx";
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "../Components/signin.jsx";
import Signup from "../Components/signup.jsx";
import Home from "../Components/Home.jsx";
import About from "../Components/About.jsx";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/signin" element={<Signin />}>
            Sign in
          </Route>
          <Route path="/signup" element={<Signup />}>
            Sign up
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
