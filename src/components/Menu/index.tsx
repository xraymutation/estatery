import React from "react";
import { menu } from "../../assets/data/menu";
import { Link } from "react-router";

const Menu = () => {
  return (
    <div className="w-full lg:w-3/4 mt-10 lg:mt-0">
      <ul className="flex flex-col lg:flex-row h-full items-start lg:items-center list-none">
        {menu?.map((item) => (
          <li key={item.url}>
            <Link
              to={item.url}
              title={`Link to: ${item.label}`}
              className="block py-4 lg:py-1 px-0 lg:px-4 xl:px-8 text-menu-xs-regular lg:text-body-md-medium"
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
