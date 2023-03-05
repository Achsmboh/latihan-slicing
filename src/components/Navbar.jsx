import React from "react";

const Navbar = () => {
  return (
    <div className="px-32 bg-white h-20 flex items-center w-full fixed shadow-sm">
      <div className="lg:grid grid-cols-2 w-full">
        <div className="flex gap-16 text-biru font-Inter text-base w-full">
          <div>Logo</div>
          <ul className="flex gap-7">
            <li>Home</li>
            <li>Feature</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
