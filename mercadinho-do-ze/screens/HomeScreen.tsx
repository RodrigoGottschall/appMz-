import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import HeaderHome from "../components/HeaderHome/Header";
import Footer from "../components/Footer";
import WineCard from "../components/Card/WineCard";

// Dados de exemplo dos vinhos (substitua por seus dados reais)
const wines = [
  {
    id: 1,
    name: "Vinho Tinto Seco",
    price: 49.9,
    image: require("../assets/vinho1.png"),
  },
  {
    id: 2,
    name: "Vinho Branco Suave",
    price: 35.5,
    image: require("../assets/vinho2.png"),
  },
  {
    id: 3,
    name: "Vinho Rosé Frisante",
    price: 52.0,
    image: require("../assets/vinho3.png"),
  },
];

const HomeScreen = () => {
  const [selectedWines, setSelectedWines] = useState({});

  const handleWinePress = (wineId) => {
    setSelectedWines((prevSelected) => ({
      ...prevSelected,
      [wineId]: (prevSelected[wineId] || 0) + 1,
    }));
  };

  const handleDecrease = (wineId) => {
    setSelectedWines((prevSelected) => {
      const newQuantity = (prevSelected[wineId] || 0) - 1;
      return newQuantity > 0
        ? { ...prevSelected, [wineId]: newQuantity }
        : { ...prevSelected, [wineId]: undefined };
    });
  };

  const calculateTotal = () => {
    return wines.reduce((total, wine) => {
      const quantity = selectedWines[wine.id] || 0;
      return total + wine.price * quantity;
    }, 0);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <HeaderHome />
        <FlatList
          data={wines}
          keyExtractor={(item) => item.id.toString()}
          numColumns={1}
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item }) => (
            <WineCard
              wine={item}
              selectedQuantity={selectedWines[item.id] || 0}
              onIncrease={handleWinePress}
              onDecrease={handleDecrease}
            />
          )}
        />
        <View style={styles.calculationContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalPrice}>
            R$ {calculateTotal().toFixed(2)}
          </Text>
        </View>
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
    padding: 10,
    paddingTop: 50,
    paddingBottom: 20,
  },
  calculationContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  totalPrice: {
    fontSize: 20,
  },
  flatList: {
    padding: 20,
  },
  flatListContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default HomeScreen;
