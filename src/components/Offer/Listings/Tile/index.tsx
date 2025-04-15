import React from "react";
import { Estate } from "../../../../assets/data/estates";
import Heart from "../../../Heart";

const Tile = (data: Estate) => {
  const { img, type, title, address, price, isFavourite } = data;

  return (
    <div className="w-full p-0">
      <img src={img} alt="" width={344.18} height={200} />
      <span className="badge">{type}</span>
      <div className="flex flex-col">
        <h3 className="text-h4">{title}</h3>
        <p className="text-body-md-regular">{address}</p>
        <p className="text-body-md-medium">${price}/month</p>
        <Heart selected={isFavourite} />
      </div>
    </div>
  );
};

export default Tile;
