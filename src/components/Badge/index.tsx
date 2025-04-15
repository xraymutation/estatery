import React from "react";
import Stars from "../svg/Stars";
import Triangle from "../svg/Triangle";

const Badge = ({ text }: { text: string }) => {
  return (
    <div className="badge">
      <Stars />
      <span className="text-badge-md-bold text-white uppercase">{text}</span>
      <div className="absolute -bottom-2 left-0 w-2 h-2 ">
        <Triangle />
      </div>
    </div>
  );
};

export default Badge;
