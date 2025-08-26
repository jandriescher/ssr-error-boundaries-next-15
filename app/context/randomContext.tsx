'use client';

import { createContext } from "react";

type RandomContextType = {
  randomValue: number;
  setRandomValue: (value: number) => void;
};

const RandomContext = createContext<RandomContextType | undefined>(undefined);

const RandomContextProvider = RandomContext.Provider;

export { RandomContext, RandomContextProvider };
