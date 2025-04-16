import React from "react";
import { Link } from "react-router";
import Logo from "../svg/Logo";
import Menu from "../Menu";
import Button from "../Button";
import MenuBurger from "../svg/MenuBurger";
import MenuClose from "../svg/MenuClose"; 
import { useMenu } from "../../contexts/menu";

const Header = () => {
  const { isOpened, toggleMenu } = useMenu();

  return (
    <div className="absolute top-0 left-0 right-0 lg:static flex flex-wrap w-full items-center justify-between px-8 lg:py-8 py-5 lg:px-20 z-10 bg-white/80 backdrop-blur-md">
      <div className="w-full lg:w-1/4 flex flex-row lg:flex-col  justify-between">
        <Link to="/" className="inline-block">
          <div className={`transition-all duration-100 ease-in-out ${isOpened ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"}`}>
            <Logo />
          </div>
        </Link>
        <div className="inline-block lg:hidden mobile-menu-burger">
          <button onClick={toggleMenu} className="bg-transparent border-none">  
            {isOpened ? <MenuClose /> : <MenuBurger />}
          </button>
        </div>
      </div>
      <div className={`flex flex-col lg:flex-row w-full lg:w-3/4 overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpened ? "max-h-[1000px]" : "max-h-0 lg:max-h-[1000px]"}`}>
        <Menu />
        <div className="w-full lg:w-1/4 mt-16 lg:mt-0">
        <div className="flex flex-col lg:flex-row justify-end gap-6">
          <Button type="secondary" text="Login" />
          <Button type="primary" text="Sign up" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
