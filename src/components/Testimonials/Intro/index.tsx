import React from "react";
import { testimonials } from "../../../assets/data/testimonials";

const { title, description } = testimonials;

const Intro = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center text-center">
        <h2 className="text-h2">{title}</h2>
        <p className="text-body-md text-base-600 opacity-70 max-w-[352px]">{description}</p>
    </div>
  );
};

export default Intro;