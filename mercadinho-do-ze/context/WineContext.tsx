import React, { createContext, useState, useContext } from "react";

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

  const addToCart = (item: WineItem) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex > -1) {
        // Se o item já existe no carrinho, incrementa a quantidade em 1
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + 1,
        };
        return updatedCartItems;
      } else {
        // Se o item não existe no carrinho, adiciona com quantidade 1
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });

    setSelectedWines((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1, // Atualiza a quantidade em selectedWines
    }));
  };

  const removeFromCart = (item: WineItem) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex > -1) {
        const updatedCartItems = [...prevCartItems];
        const existingItem = updatedCartItems[existingItemIndex];

        if (existingItem.quantity > 1) {
          updatedCartItems[existingItemIndex] = {
            ...existingItem,
            quantity: existingItem.quantity - 1,
          };
        } else {
          updatedCartItems.splice(existingItemIndex, 1);
        }

        return updatedCartItems;
      }

      return prevCartItems; // Retorna o carrinho original se o item não for encontrado
    });

    setSelectedWines((prev) => ({
      ...prev,
      [item.id]: Math.max(0, (prev[item.id] || 0) - 1), // Atualiza a quantidade em selectedWines
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
