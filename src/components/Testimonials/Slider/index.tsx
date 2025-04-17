import React, { useEffect } from "react";
import { testimonials } from "../../../assets/data/testimonials";
import { useTestimonials } from "../../../contexts/testimonials";
const { entries } = testimonials;

const TestimonialsSlider = () => {
  const { currentSlide, setCurrentSlide } = useTestimonials();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % entries.length);
    }, 500000);

    return () => clearInterval(timer);
  }, [setCurrentSlide]);

  return (
    <div className="mt-10">
      {entries.map((entry, index) => {
        const { name, text, position } = entry;
        return (
          <div
            key={name}
            className={`w-full h-full slider-item text-center mb-12 transition-opacity duration-500 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              position: currentSlide === index ? "relative" : "absolute",
              transform: `translateX(${(index - currentSlide) * 100}%)`,
              transition: "transform 500ms ease-in-out",
            }}
          >
            <p className="text-body-md text-base-1000 max-w-[736px] mx-auto px-6 md:px-0">
              {text}
            </p>
            <div className="block w-full mt-6 text-base-1000">
              <span className="body-md-bold">{name}</span>,{" "}
              <span className="text-base-600">{position}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialsSlider;
