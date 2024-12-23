'use client';

import { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollTarget, setScrollTarget] = useState(null);

  return (
    <ScrollContext.Provider value={{ scrollTarget, setScrollTarget }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
