import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/HomeScreen/Header";
import Footer from "../components/Footer";
import Body from "../components/HomeScreen/Body";
import { useWineContext, WineItem } from "../context/WineContext";

const HomeScreen = () => {
  const { addToCart } = useWineContext();

  const handleAddToCart = (wineItem: WineItem) => {
    addToCart(wineItem);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Header />
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
});

export default HomeScreen;
