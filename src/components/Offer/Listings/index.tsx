import React from "react";
import { estates } from "../../../assets/data/estates";
import Tile from "./Tile";
import { useTabs } from "../../../contexts/tabs";
const Listings = () => {
  const { activeTab } = useTabs();
  return (
    <div className="flex w-full items-center justify-center mt-12">
      <div className="grid max-w-[1104px] gap-6 grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {estates
          .filter((estate) => estate.type === activeTab)
          .map((estate) => (
            <Tile key={estate.title} {...estate} />
          ))}
      </div>
    </div>
  );
};

export default Listings;
