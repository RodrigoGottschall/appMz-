import React, { createContext, useState, useContext } from "react";

interface WineItem {
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
  selectedWines: { [wineId: number]: number };
  setSelectedWines: React.Dispatch<
    React.SetStateAction<{ [wineId: number]: number }>
  >;
}

const WineContext = createContext<WineContextType | undefined>(undefined);

export const WineProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<WineItem[]>([]);
  const [selectedWines, setSelectedWines] = useState<{
    [wineId: number]: number;
  }>({});

  const addToCart = (newItem: WineItem) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === newItem.id
      );

      if (existingItemIndex > -1) {
        const updatedItem = {
          ...prevCartItems[existingItemIndex],
          quantity: prevCartItems[existingItemIndex].quantity + 1,
        };
        return [
          ...prevCartItems.slice(0, existingItemIndex),
          updatedItem,
          ...prevCartItems.slice(existingItemIndex + 1),
        ];
      } else {
        return [...prevCartItems, { ...newItem, quantity: 1 }];
      }
    });
    setSelectedWines((prev) => ({
      ...prev,
      [newItem.id]: (prev[newItem.id] || 0) + 1,
    }));
  };

  const removeFromCart = (item: WineItem) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== item.id)
    );
    setSelectedWines((prev) => ({
      ...prev,
      [item.id]: Math.max(0, (prev[item.id] || 0) - 1),
    }));
  };

  const removeAllItems = () => {
    setCartItems([]);
    setSelectedWines({});
  };

  return (
    <WineContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        removeAllItems,
        selectedWines,
        setSelectedWines,
      }}
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
