import React from "react";
import { Link } from "react-router";
import Logo from "../svg/Logo";
import Menu from "../Menu";
import Button from "../Button";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-between py-8 px-20">
      <div className="w-full md:w-1/4">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Menu />
      <div className="w-full md:w-1/4">
        <div className="flex justify-between">
          <div className="w-1/2 pr-2">
            <Button type="secondary" text="Login" />
          </div>
          <div className="w-1/2 pl-2">
            <Button type="primary" text="Sign up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
