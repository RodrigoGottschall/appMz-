import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import WineCard from "./Card/WineCard";
import { useNavigation } from "@react-navigation/native";
import { useWineContext } from "../../context/WineContext";
import { WineCardProps } from "../../context/WineContext";

export const wines = [
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

const Body: React.FC = () => {
  const navigation = useNavigation();
  const { addToCart, cartItems } = useWineContext();
  const { selectedWines, setSelectedWines } = useWineContext();

  const handleWinePress = (wineId: number) => {
    addToCart({
      ...wines.find((wine) => wine.id === wineId),
      quantity: 1,
    });
  };

  const handleIncrease = (wineId: number) => {
    setSelectedWines((prevSelected) => ({
      ...prevSelected,
      [wineId]: (prevSelected[wineId] || 0) + 1,
    }));
  };

  const handleDecrease = (wineId: number) => {
    setSelectedWines((prevSelected) => {
      const newQuantity = (prevSelected[wineId] || 0) - 1;
      if (newQuantity === 0) {
        const { [wineId]: _, ...rest } = prevSelected;
        return rest;
      } else {
        return { ...prevSelected, [wineId]: newQuantity };
      }
    });
  };

  const calculateTotal = () => {
    return wines.reduce((total, wine) => {
      const quantity = selectedWines[wine.id] || 0;
      return total + wine.price * quantity;
    }, 0);
  };

  const calculateTotalItems = () => {
    return Object.values(selectedWines).reduce(
      (total, quantity) => total + (quantity || 0),
      0
    );
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
            addToCart={() => handleWinePress(item.id)}
          />
        )}
      />
      <View style={styles.calculationContainer}>
        <View style={styles.totalContainer}>
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
    paddingBottom: 69,
    paddingLeft: 18,
    justifyContent: "space-between",
  },
  calculationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 19,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  totalLabel: {
    fontSize: 10,
    fontFamily: "Nunito_600SemiBold",
    marginBottom: 5,
    color: "#878786",
  },
  totalPrice: {
    fontSize: 14,
    fontFamily: "Nunito_700Bold",
    color: "#494949",
  },
  wineCard: {
    flex: 1,
    margin: 5,
  },
  totalContainer: {
    alignItems: "flex-start",
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
    fontFamily: "Nunito_600SemiBold",
    color: "#878786",
    paddingTop: 4,
  },
  valueAndItems: {
    display: "flex",
    flexDirection: "row",
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
    fontFamily: "Nunito_800ExtraBold",
  },
});

export default Body;
