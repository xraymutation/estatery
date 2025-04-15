import React from "react";
import { heroData } from "../../../assets/data/hero";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px]">
      <img
        src={heroData.image.src}
        alt={heroData.image.alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroImage;
