import React from "react";
import { heroData } from "../../../assets/data/hero";
import Counter from "../../Counter";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-6 p-8 md:py-12 md:px-20">
      <h1 className="text-h1-mobile md:text-h1 pr-8">{heroData.title}</h1>
      <p className="body-xl-medium px-0 md:pr-[45%]">{heroData.description}</p>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
