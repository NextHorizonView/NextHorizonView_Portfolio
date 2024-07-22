// src/contexts/Cursor.context.js
import React, { createContext, useContext, useState } from 'react';

const HoverContext = createContext();

export const useHover = () => useContext(HoverContext);

export const HoverProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </HoverContext.Provider>
  );
};
