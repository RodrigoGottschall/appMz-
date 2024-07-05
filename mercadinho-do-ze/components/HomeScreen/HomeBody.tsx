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
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>
            R$ {calculateTotal().toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.sacolaButton}
          onPress={() => navigation.navigate("BagScreen")}
        >
          <Text style={styles.sacolaButtonText}>Ver Sacola</Text>
        </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 19,
    paddingBottom: 14,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  totalContainer: {
    alignItems: "flex-start",
  },
  totalLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: "#878786",
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#494949",
  },
  sacolaButton: {
    backgroundColor: "#F7A833",
    width: 104,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 17,
  },
  sacolaButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
  },
});

export default HomeBody;
