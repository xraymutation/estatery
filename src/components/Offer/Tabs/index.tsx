import React from "react";
import Button from "../../Button";

const Tabs = () => {
  return (
    <div className="inline-block bg-secondary-0-light border border-base-300 rounded-lg p-2">
      <Button type="tab" text="Houses" isActive={true} />
      <Button type="tab" text="Apartments" />
    </div>
  );
};

export default Tabs;
