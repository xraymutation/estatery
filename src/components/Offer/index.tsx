import React from "react";
import Tabs from "./Tabs";
import Intro from "./Intro";
import Listings from "./Listings";
const Offer = () => {
  return (
    <div className="flex flex-wrap  w-full">      
        <Tabs />      
        <Intro />
        <Listings />
    </div>
  );
};

export default Offer;
