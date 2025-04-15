import React from "react";
import Button from "../../Button";
import { estates } from "../../../assets/data/estates";
import { useTabs } from "../../../contexts/tabs";

const Tabs = () => {
  const types = estates
    .map((e) => e.type)
    .filter((type, i, arr) => arr.indexOf(type) === i);

  const { activeTab, setActiveTab } = useTabs();

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-wrap gap-2 inline-block bg-secondary-0-light border border-base-300 rounded-lg p-2 mt-20">
        {types.map((type) => (
          <Button
            key={type}
            type="tab"
            text={`${type}s`}
            isActive={activeTab === type}
            onClick={() => setActiveTab(type)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
