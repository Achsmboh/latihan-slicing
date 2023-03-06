import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages";
import Feature from "../pages/Feature";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
