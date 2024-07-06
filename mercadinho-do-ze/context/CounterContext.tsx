import React, { createContext, useState, useContext } from "react";

interface CounterContextType {
  selectedWines: { [wineId: number]: number };
  setSelectedWines: React.Dispatch<
    React.SetStateAction<{ [wineId: number]: number }>
  >;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider: React.FC = ({ children }) => {
  const [selectedWines, setSelectedWines] = useState<{
    [wineId: number]: number;
  }>({});

  return (
    <CounterContext.Provider value={{ selectedWines, setSelectedWines }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  return context;
};
