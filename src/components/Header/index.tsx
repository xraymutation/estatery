import React from "react";
import { Link } from "react-router";
import Logo from "../svg/Logo";
import Menu from "../Menu";
import Button from "../Button";

const Header = () => {
  return (
    <div className="flex flex-wrap w-full max-w-[1440px] items-center justify-between py-8 px-20">
      <div className="w-full md:w-1/4">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Menu />
      <div className="w-full md:w-1/4">
        <div className="flex justify-end gap-6">
          <Button type="secondary" text="Login" />
          <Button type="primary" text="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default Header;
