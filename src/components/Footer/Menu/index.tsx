import React from "react";
import { menuFooter } from "../../../assets/data/menu-footer";
import { Link } from "react-router-dom";

const MenuFooter = () => {
  return (
    <ul className="block md:flex md:flex-row md:justify-end md:gap-6 list-none p-0 text-center">
      {menuFooter.map((item) => (
        <li key={item.id} className="inline-block w-1/2 md:w-auto  p-3 md:p-0">
          <Link
            to={item.url}
            className="body-md-medium-160 opacity-50 uppercase font-bold"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuFooter;
