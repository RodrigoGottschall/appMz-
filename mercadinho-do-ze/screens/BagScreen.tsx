import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import HeaderBag from "../components/BagScreen/Header";
import Footer from "../components/Footer";
import { useWineContext } from "../context/WineContext";
import CartItemCard from "../components/BagScreen/CartItemCard";

const BagScreen: React.FC = () => {
  const { cartItems } = useWineContext();

  const renderItem = ({ item }) => {
    return (
      <CartItemCard
        item={{
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: item.quantity,
        }}
      />
    ); // Passar as propriedades para o CartItemCard
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <HeaderBag />
        {cartItems.length === 0 ? (
          <Text>Sua sacola está vazia</Text>
        ) : (
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        )}
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
    paddingBottom: 20,
  },
});

export default BagScreen;
