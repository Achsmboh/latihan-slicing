import React from "react";

const Navbar = () => {
  return (
    <div className="px-32 bg-white h-20 flex items-center w-full fixed shadow-sm z-50">
      <div className="lg:grid grid-cols-2 w-full">
        <div className="flex gap-16 text-biru font-Inter text-base w-full">
          <div>
            <a href="/">Logo</a>
          </div>
          <ul className="flex gap-7">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/feature">Feature</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
