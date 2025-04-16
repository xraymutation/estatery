import React from "react";

const Intro = () => {
  return (
    <div className="flex w-full items-center justify-center ">
      <div className="flex flex-col items-center justify-center max-w-[544px] mt-10 text-center gap-6">
        <h2 className="text-h2 px-6 md:px-0">We make it easy for houses and apartments.</h2>
        <p className="text-body-md px-6 md:px-0 text-base-600">
          Whether it’s selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? you’ll save a
          bunch of money and time with our services.
        </p>
      </div>
    </div>
  );
};

export default Intro;
