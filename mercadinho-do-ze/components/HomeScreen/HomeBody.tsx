import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import WineCard from "./Card/WineCard";
import { useNavigation } from "@react-navigation/native";

const HomeBody = () => {
  const navigation = useNavigation();

  const wines = [
    {
      id: 1,
      name: "Vinho Brasileiro Parreiras do Sul Suave Tinto 1l",
      price: 19.49,
      image: require("../../assets/vinho1.png"),
    },
    {
      id: 2,
      name: "Vinho Brasileiro Pergola Seco Tinto 1L",
      price: 15.99,
      image: require("../../assets/vinho2.png"),
    },
    {
      id: 3,
      name: "Vinho Brasileiro Parreiras do Sul Suave Tinto 1l",
      price: 7.99,
      image: require("../../assets/vinho3.png"),
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

  const calculateTotalItems = () => {
    const quantities = Object.values(selectedWines);
    const validQuantities = quantities.filter((qty) => qty !== undefined);
    return validQuantities.reduce((total, qty) => total + qty, 0);
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
        <Text style={styles.totalLabel}>Total</Text>
        <View style={styles.valueAndItems}>
          <Text style={styles.totalPrice}>
            R$ {calculateTotal().toFixed(2)}
          </Text>
          <Text style={styles.itemCounterText}>
            {""} / {calculateTotalItems()} item(s)
          </Text>
        </View>
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
    paddingLeft: 18,
    justifyContent: "space-between",
  },
  calculationContainer: {
    paddingTop: 10,
    paddingLeft: 19,
    paddingBottom: 14,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  totalLabel: {
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 5,
    color: "#878786",
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#494949",
  },
  wineCard: {
    flex: 1,
    margin: 5,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemCounter: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 8,
  },
  itemCounterText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#878786",
    paddingTop: 4,
  },
  valueAndItems: {
    display: "flex",
    flexDirection: "row",
  },
});

export default HomeBody;
