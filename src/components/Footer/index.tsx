import React from "react";
import Socials from "../Socials";
import Logo from "../svg/Logo";
import MenuFooter from "./Menu";

const Footer = () => {
  return (
    <div className="flex flex-col flex-wrap w-full items-center justify-between px-8 md:py-16 lg:px-20">
      <div className="w-full flex flex-col md:flex-row justify-between pb-6 md:pb-8 border-solid border-b border-gray-200">
        <div className="body-md-medium-160 w-full md:w-1/2 p-6 md:p-0">
          <Logo />
        </div>
        <div className="opacity-50 w-full md:w-1/2">
          <MenuFooter />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-0 justify-between pt-8 md:pt-10 text-center md:text-left">
        <div className="body-md-medium-160">
          <span className="opacity-50">
            ©2021 Estatery. All rights reserved
          </span>
        </div>
        <div className="flex flex-row opacity-50 justify-center md:justify-end">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
