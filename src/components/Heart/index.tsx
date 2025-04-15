import React from "react";
import IconHeart from "../svg/Heart";

interface Heart {
  selected?: boolean;
}

const Heart = ({ selected }: Heart) => {
  return (
    <button className={`heart ${selected ? "selected" : ""}`}>
      <IconHeart />
    </button>
  );
};

export default Heart;
