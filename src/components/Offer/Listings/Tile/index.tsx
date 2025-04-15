import React from "react";
import { Estate } from "../../../../assets/data/estates";
import Heart from "../../../Heart";
import Badge from "../../../Badge";
const Tile = (data: Estate) => {
  const { img, type, title, address, price, isFavourite } = data;

  return (
    <div className="w-full p-0">
      <figure>
        <img
          src={img}
          alt=""
          width={344.18}
          height={200}
          className="block w-full h-auto"
        />
      </figure>
      <figcaption className="flex flex-col gap-4 border-l border-r border-b border-base-200 p-8 rounded-lg rounded-t-none relative">
        <Badge text={type} />
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <p className="text-body-md-medium">
              <span className="text-body-xxl-bolder text-secondary-500">
                ${price}
              </span>
              <span className="opacity-50"> /month</span>
            </p>
            <Heart selected={isFavourite} />
          </div>
          <h3 className="text-h4">{title}</h3>
          <p className="text-body-md-regular mt-2 opacity-50">{address}</p>
        </div>
      </figcaption>
    </div>
  );
};

export default Tile;
