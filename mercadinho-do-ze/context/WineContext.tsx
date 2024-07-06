import React, { createContext, useState, useContext } from "react";
import { useCounterContext } from "./CounterContext";

export interface WineItem {
  id: number;
  name: string;
  price: number;
  image: any;
  quantity: number;
}

interface WineContextType {
  cartItems: WineItem[];
  addToCart: (item: WineItem) => void;
  removeFromCart: (item: WineItem) => void;
  removeAllItems: () => void;
}

const WineContext = createContext<WineContextType | undefined>(undefined);

export const WineProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<WineItem[]>([]);
  const { setSelectedWines } = useCounterContext();

  const addToCart = (item: WineItem) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex > -1) {
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCartItems, item];
      }
    });
  };

  const removeFromCart = (item: WineItem) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const removeAllItems = () => {
    setCartItems([]);
    setSelectedWines({});
  };

  return (
    <WineContext.Provider
      value={{ cartItems, addToCart, removeFromCart, removeAllItems }}
    >
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
