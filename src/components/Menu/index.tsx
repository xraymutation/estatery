import React from "react";
import { menu } from "../../assets/data/menu";
import { Link } from "react-router";

const Menu = () => {
  return (
    <div className="w-full md:w-1/2">
      <ul className="flex flex-row h-full items-center list-none">
        {menu?.map((item) => (
          <li key={item.url} className="flex">
            <Link
              to={item.url}
              title={`Link to: ${item.label}`}
              className="block py-1 px-[30px] text-body-md-medium"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
