import React from "react";

const Triangle = ({ color = '#6851FF' }: { color: string }) => {
  return (
    <svg
      version="1.1"
      id="triangle"
      x="0px"
      y="0px"
      width="8px"
      height="8px"
      viewBox="0 0 8 8"
      enableBackground="new 0 0 8 8"
    >
        <polyline fill={color} points="0,0 8,0 8,8 " />
    </svg>
  );
};

export default Triangle;
