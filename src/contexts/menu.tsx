import React, { createContext, useContext, useState } from 'react';

interface MenuContextType {
  isOpened: boolean;
  toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextType>({
  isOpened: false,
  toggleMenu: () => {},
});

export const useMenu = () => useContext(MenuContext);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(prev => !prev);
  };

  return (
    <MenuContext.Provider value={{ isOpened, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
