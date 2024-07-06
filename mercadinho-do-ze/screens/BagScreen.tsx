import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Header from "../components/BagScreen/Header";
import Body from "../components/BagScreen/Body";
import Footer from "../components/Footer";
import { useWineContext, WineItem } from "../context/WineContext";
import CartItemCard from "../components/BagScreen/CartItemCard";

const BagScreen: React.FC = () => {
  const { cartItems, addToCart, removeFromCart } = useWineContext();
  const [_, setForceUpdate] = useState(0);

  useEffect(() => {
    setForceUpdate((prev) => prev + 1);
  }, [cartItems]);

  const handleRemoveFromCart = (item: WineItem) => {
    removeFromCart(item);
  };

  const handleIncreaseQuantity = (item: WineItem) => {
    addToCart({ ...item, quantity: 1 });
  };

  const handleDecreaseQuantity = (item: WineItem) => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: -1 });
    } else {
      removeFromCart(item);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <CartItemCard
        item={item}
        onRemove={() => handleRemoveFromCart(item)}
        onIncrease={() => handleIncreaseQuantity(item)}
        onDecrease={() => handleDecreaseQuantity(item)}
      />
    );
  };

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
  },
});

export default BagScreen;
