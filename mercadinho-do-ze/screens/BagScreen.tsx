import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Header from "../components/BagScreen/Header";
import Body from "../components/BagScreen/Body";
import Footer from "../components/Footer";
import { useWineContext, WineItem } from "../context/WineContext";
import CartItemCard from "../components/BagScreen/CartItemCard";

const BagScreen: React.FC = () => {
  const { cartItems, addToCart, removeFromCart, setCartItems } =
    useWineContext();

  const handleRemoveFromCart = (item: WineItem) => {
    removeFromCart(item);
  };

  const handleIncreaseQuantity = (item: WineItem) => {
    addToCart(item);
  };

  const handleDecreaseQuantity = (item: WineItem) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedItem = { ...cartItems[existingItemIndex] };
      if (updatedItem.quantity > 1) {
        updatedItem.quantity--;
        setCartItems((prevCartItems) => [
          ...prevCartItems.slice(0, existingItemIndex),
          updatedItem,
          ...prevCartItems.slice(existingItemIndex + 1),
        ]);
      } else {
        removeFromCart(item);
      }
    }
  };

  const renderItem = ({ item }) => (
    <CartItemCard
      item={item}
      onIncrease={() => handleIncreaseQuantity(item)} // Passa a função como prop
      onDecrease={() => handleDecreaseQuantity(item)} // Passa a função como prop
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
