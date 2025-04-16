import React from "react";
import { heroData } from "../../../assets/data/hero";
import Counter from "../../Counter";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-12 md:gap-6 p-8 md:py-12 md:px-20 bg-hero bg-cover bg-size-[200%] bg-[16%] md:bg-none">
      <h1 className="text-h1-mobile md:text-h1 pr-8 text-center md:text-left">
        {heroData.title.split(" ").map((word, index) => (
          <span
            key={index}
            className="inline-block"
            style={{
              opacity: 0,
              transform: "translateY(-12px)",
              animation: `fadeUp 300ms ease-out forwards`,
              animationDelay: `${100 + index * 50}ms`,
            }}
          >
            &nbsp;{word}
          </span>
        ))}
      </h1>
      <style>
        {`
          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <p className="body-xl-medium px-16 md:px-0 md:pr-[45%] text-center md:text-left">
        {heroData.description}
      </p>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          {heroData.counters.map((counter) => (
            <Counter
              key={counter.name}
              name={counter.name}
              count={counter.count}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroText;
