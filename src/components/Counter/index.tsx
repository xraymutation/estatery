import React from "react";

interface CounterProps {
  name: string;
  count: string;
}

const Counter = ({ name, count }: CounterProps) => {
  return (
    <div className="border-l border-base-300">
      <div className="flex flex-col gap-0 p-8 md:py-2 md:px-6">
        <h3 className="text-h3 text-text-accent">{count}</h3>
        <span className="text-body-md-medium text-base-600">{name}</span>
      </div>
    </div>
  );
};

export default Counter;
