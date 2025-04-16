import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="flex w-full justify-center bg-none md:bg-hero bg-bottom bg-left bg-no-repeat mt-20 md:mt-0">
      <div className="flex flex-col md:flex-row w-full max-w-[1440px]">
        <div className="w-full md:w-1/2  bg-cover  flex items-center justify-center">
          <HeroText />
        </div>
        <div className="w-full md:w-1/2">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default Hero;
