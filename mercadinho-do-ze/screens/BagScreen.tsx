import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderBag from "../components/BagScreen/Header";
import Footer from "../components/Footer";
import { useWineContext } from "../context/WineContext";

const BagScreen: React.FC = () => {
  const { cartItems } = useWineContext();

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <HeaderBag />
        {cartItems.map((item, index) => (
          <Text key={index}>
            {item.nome} - {item.preco}
          </Text>
        ))}
      </View>
      <Text>Sacola screen</Text>
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
    padding: 10,
    paddingTop: 50,
    paddingBottom: 20,
  },
});

export default BagScreen;
