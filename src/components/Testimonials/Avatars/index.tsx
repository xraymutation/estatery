import React from "react";
import { useTestimonials } from "../../../contexts/testimonials";
import { testimonials } from "../../../assets/data/testimonials";
import AvatarDefault from "../../svg/AvatarDefault";
import AvatarActive from "../../svg/AvatarActive";

const Avatars = () => {
  const { currentSlide } = useTestimonials();
  return (
    <div className="flex gap-3 md:gap-9">
      {testimonials.entries.map((entry, index) => (
        <div
          key={entry.name}
          className={`flex relative items-center justify-center w-[86px] h-[86px] p-2 bg-transparent border-none`}
        >
          {index === currentSlide && (
            <AvatarActive className="absolute top-0 left-[3px] right-0 w-[86px] h-[86px] block z-20" />
          )}
          <AvatarDefault className="absolute top-0 left-0 right-0 w-[86px] h-[86px] block z-10" />
          <img
            src={entry.img}
            alt={entry.name}
            width={60}
            height={60}
            className="rounded-full w-[60px] h-[60px]  top-0 left-0 right-0 mt-[10px] mx-auto "
          />
        </div>
      ))}
    </div>
  );
};

export default Avatars;
