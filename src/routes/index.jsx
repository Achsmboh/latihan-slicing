import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages";
import Feature from "../pages/Feature";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
