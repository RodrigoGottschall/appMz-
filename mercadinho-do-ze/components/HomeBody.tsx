import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import WineCard from "./Card/WineCard";

const WineList = () => {
  const wines = [
    {
      id: 1,
      name: "Vinho Brasileiro Parreiras do Sul Suave Tinto 1l",
      price: 19.49,
      image: require("../assets/vinho1.png"),
    },
    {
      id: 2,
      name: "Vinho Brasileiro Pergola Seco Tinto 1L",
      price: 15.99,
      image: require("../assets/vinho2.png"),
    },
    {
      id: 3,
      name: "Vinho Brasileiro Parreiras do Sul Suave Tinto 1l",
      price: 7.99,
      image: require("../assets/vinho3.png"),
    },
  ];

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
    <View style={styles.bodyContainer}>
      <FlatList
        data={wines}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
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
        <Text style={styles.totalPrice}>R$ {calculateTotal().toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    height: 700,
  },
  flatListContent: {
    paddingBottom: 50,
    justifyContent: "space-between",
  },
  calculationContainer: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "red",
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  totalPrice: {
    fontSize: 20,
  },
  wineCard: {
    flex: 1,
    margin: 5,
  },
});

export default WineList;
