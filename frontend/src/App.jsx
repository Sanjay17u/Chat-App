/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SettingPage from "./pages/SettingPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/settings" element={ <SettingPage/> } />
        <Route path="/profile" element={ <ProfilePage/> } />
      </Routes>

    </>
  );
};

export default App;
