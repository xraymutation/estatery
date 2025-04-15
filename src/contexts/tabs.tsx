import React, { createContext, useContext, useState } from "react";
import { Estate } from "../assets/data/estates";

type TabType = Estate["type"];

interface TabsContextType {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProviderProps {
  children: React.ReactNode;
  initialTab: TabType;
}

export function TabsProvider({ children, initialTab }: TabsProviderProps) {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
}

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
};
