import React, { createContext, useState, useContext } from "react";

export interface WineItem {
  // Defina a estrutura do seu item de vinho aqui (nome, preço, etc.)
}

interface WineContextType {
  cartItems: WineItem[];
  addToCart: (item: WineItem) => void;
}

const WineContext = createContext<WineContextType | undefined>(undefined);

export const WineProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState<WineItem[]>([]);

  const addToCart = (item: WineItem) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <WineContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </WineContext.Provider>
  );
};

export const useWineContext = () => {
  const context = useContext(WineContext);
  if (!context) {
    throw new Error("useWineContext must be used within a WineProvider");
  }
  return context;
};
