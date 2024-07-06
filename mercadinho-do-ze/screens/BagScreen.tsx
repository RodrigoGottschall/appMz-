import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Header from "../components/BagScreen/Header";
import Body from "../components/BagScreen/Body";
import Footer from "../components/Footer";
import { useWineContext, WineItem } from "../context/WineContext";
import CartItemCard from "../components/BagScreen/CartItemCard";

const BagScreen: React.FC = () => {
  const {
    cartItems,
    selectedWines,
    addToCart,
    removeFromCart,
    setSelectedWines,
    setCartItems,
  } = useWineContext();
  useWineContext();

  const handleRemoveFromCart = (item: WineItem) => {
    removeFromCart(item);
  };

  const handleIncreaseQuantity = (item: WineItem) => {
    addToCart(item);
  };

  const handleDecreaseQuantity = (item: WineItem) => {
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

    setSelectedWines((prev) => ({
      ...prev,
      [item.id]: Math.max(0, (prev[item.id] || 0) - 1),
    }));
  };

  const renderItem = ({ item }) => (
    <CartItemCard
      item={item}
      onRemove={() => handleRemoveFromCart(item)}
      onIncrease={() => handleIncreaseQuantity(item)}
      onDecrease={() => handleDecreaseQuantity(item)}
    />
  );

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Header />
        {cartItems.length === 0 ? (
          <Text style={styles.text}>Sua sacola está vazia</Text>
        ) : (
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            style={styles.flatListContainer}
          />
        )}
        <Body />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  text: {
    paddingTop: 25,
    paddingLeft: 17,
    minHeight: 745,
  },
  flatListContainer: {
    minHeight: 745,
  },
});

export default BagScreen;
