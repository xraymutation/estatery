import React from "react";
import Intro from "./Intro";
import TestimonialsSlider from "./Slider";
import Avatars from "./Avatars";

const Testimonials = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-testimonials bg-cover bg-center bg-bottom bg-no-repeat mt-20 md:mt-30 pb-6">
        <Intro />
        <TestimonialsSlider />
        <Avatars />
      </div>
    </>
  );
};

export default Testimonials;
