import React from "react";
import { socials } from "../../assets/data/socials";

const Socials = () => {
  return (
    <ul className="flex flex-row w-[60%] md:w-auto justify-between gap-0 md:gap-4 list-none">
      {socials.map((social) => (
        <li key={social.id}>
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <img src={social.icon} alt={social.name} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
