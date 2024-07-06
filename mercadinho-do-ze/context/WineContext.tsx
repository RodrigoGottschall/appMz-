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
}

const WineContext = createContext<WineContextType | undefined>(undefined);

export const WineProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<WineItem[]>([]);

  const addToCart = (item: WineItem) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex > -1) {
        // Item já existe no carrinho, atualize a quantidade
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity:
            updatedCartItems[existingItemIndex].quantity + item.quantity,
        };
        return updatedCartItems;
      } else {
        // Item é novo, adicione ao carrinho
        return [...prevCartItems, item];
      }
    });
  };

  const removeFromCart = (item: WineItem) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  return (
    <WineContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
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
