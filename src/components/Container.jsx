import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Container = ({ children }) => {
  return (
    <div className="w-full overflow-auto">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Container;
