import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface PageTypes {
  children: ReactNode;
}

const Page = ({ children }: PageTypes) => {
  return (
    <div className="flex flex-col items-center w-full font-jakarta">
      <div className="w-full max-w-[1440px] mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Page;
