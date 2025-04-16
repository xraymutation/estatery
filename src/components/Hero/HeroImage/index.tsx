import React from "react";
import { heroData } from "../../../assets/data/hero";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] px-6 md:px-0 pl-10 md:pl-0">
      <img
        src={heroData.image.src}
        alt={heroData.image.alt}
        className="w-full h-full object-cover mt-6 md:mt-0"
      />
    </div>
  );
};

export default HeroImage;
