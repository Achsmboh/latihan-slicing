import React from "react";

const Container = ({ children }) => {
  return (
    <div className="text-black px-20 w-full">
      <div>{children}</div>
    </div>
  );
};

export default Container;
