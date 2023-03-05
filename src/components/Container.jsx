import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full overflow-auto">
      <div>{children}</div>
    </div>
  );
};

export default Container;
