import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../component/pages/Home";
import Booking from "../component/pages/Booking";
import Lecturer from "./../component/pages/Lecturer";
import AboutUs from "./../component/pages/AboutUs";
import Connect from "./../component/pages/Connect";
import NotFound from "./../component/pages/NotFound";

function Router(props) {
  const {lang} = props
  return (
    <Routes>
      <Route path="/Home" element={<Home lang = {lang} />} />
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Booking" element={<Booking />} />
      <Route path="/Lecturer" element={<Lecturer />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Connect" element={<Connect />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
