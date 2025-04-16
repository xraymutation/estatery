import React from "react";
import { heroData } from "../../../assets/data/hero";
import Tile from "../../Offer/Listings/Tile";
import { Estate, estates } from "../../../assets/data/estates";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] px-6 md:px-0 pl-10 md:pl-0">
      <img
        src={heroData.image.src}
        alt={heroData.image.alt}
        className="w-full h-full object-cover mt-6 md:mt-0 ml-2 md:ml-10"
      />
      <div className="absolute top-[15%] left-6 md:left-0 w-[45%] h-full">
        <Tile {...estates[5]} hasBadge={false} miniMode={true} />
      </div>
    </div>
  );
};

export default HeroImage;
