import React, { createContext, useState, useContext } from "react";

export interface WineItem {
  id: number;
  name: string;
  price: number;
  image: any;
  quantity: number;
}

export interface WineContextType {
  cartItems: WineItem[];
  addToCart: (item: WineItem) => void;
  removeFromCart: (item: WineItem) => void;
  removeAllItems: () => void;
  selectedWines: { [wineId: number]: number };
  setSelectedWines: React.Dispatch<
    React.SetStateAction<{ [wineId: number]: number }>
  >;
  setCartItems: React.Dispatch<React.SetStateAction<WineItem[]>>;
  filterWines: (searchText: string) => void;
  searchText: string;
}

export interface WineCardProps {
  wine: {
    id: number;
    name: string;
    price: number;
    image: any;
  };
  selectedQuantity: number;
  onIncrease: (wineId: number) => void;
  onDecrease: (wineId: number) => void;
  addToCart: (wineItem: WineCardProps["wine"]) => void;
}

export interface WineCounterProps {
  wineId: number;
  onIncrease: (wineId: number) => void;
  onDecrease: (wineId: number) => void;
  onPress?: () => void;
  quantity: number;
}

export interface CartItemCardProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: any;
    quantity: number;
  };
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

export interface LoadingScreenProps {
  logoSource: { uri: string };
}

const WineContext = createContext<WineContextType | undefined>(undefined);

export const WineProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<WineItem[]>([]);
  const [selectedWines, setSelectedWines] = useState<{
    [wineId: number]: number;
  }>({});
  const [searchText, setSearchText] = useState("");

  const filterWines = (text: string) => {
    setSearchText(text);
  };

  const addToCart = (item: WineItem) => {
    setCartItems((prevCartItems) => {
      const existingItemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex > -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + 1,
        };
        return updatedCartItems;
      } else {
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });

    setSelectedWines((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
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

      return prevCartItems;
    });

    setSelectedWines((prevSelectedWines) => {
      const currentQuantity = prevSelectedWines[item.id] || 0;
      if (currentQuantity > 1) {
        return {
          ...prevSelectedWines,
          [item.id]: currentQuantity - 1,
        };
      } else {
        const newSelectedWines = { ...prevSelectedWines };
        delete newSelectedWines[item.id];
        return newSelectedWines;
      }
    });
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
        setCartItems,
        filterWines,
        searchText,
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
