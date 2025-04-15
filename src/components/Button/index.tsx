import React from "react";

interface ButtonTypes {
  type: "primary" | "secondary" | "tab";
  text: string;
  isActive?: boolean;
}

const Button = ({ type = "secondary", text, isActive }: ButtonTypes) => {
  const getButtonClasses = () => {
    switch (type) {
      case "primary":
        return "btn btn-primary text-body-md-bold";
      case "secondary":
        return "btn btn-secondary text-body-md-bold";
      case "tab":
        return isActive
          ? "btn btn-tab btn-tab-active text-body-md-bold"
          : "btn btn-tab text-body-md-bold";
      default:
        return "btn btn-secondary text-body-md-bold";
    }
  };

  return <button className={getButtonClasses()}>{text}</button>;
};

export default Button;
