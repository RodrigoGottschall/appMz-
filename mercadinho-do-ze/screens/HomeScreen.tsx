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

// Componente Contador
const WineCounter = ({ wineId, quantity, onIncrease, onDecrease }) => (
  <View style={styles.wineCounter}>
    <TouchableOpacity
      onPress={() => onDecrease(wineId)}
      style={styles.counterButton}
    >
      <Text style={styles.counterButtonText}>-</Text>
    </TouchableOpacity>
    <Text style={styles.counterQuantity}>{quantity} UN</Text>
    <TouchableOpacity
      onPress={() => onIncrease(wineId)}
      style={styles.counterButton}
    >
      <Text style={styles.counterButtonText}>+</Text>
    </TouchableOpacity>
  </View>
);

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
    let total = 0;
    for (const wineId in selectedWines) {
      const wine = wines.find((w) => w.id === parseInt(wineId));
      if (wine) {
        total += wine.price * selectedWines[wineId];
      }
    }
    const totalItems = Object.values(selectedWines).reduce(
      (acc, curr) => acc + curr,
      0
    );
    return totalItems === 0 ? 0 : total;
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
            <View style={[styles.wineCard]}>
              <Image source={item.image} style={styles.wineImage} />
              <View style={styles.wineInfo}>
                <Text style={styles.wineName}>{item.name}</Text>
                <WineCounter
                  wineId={item.id}
                  quantity={selectedWines[item.id] || 0}
                  onIncrease={handleWinePress}
                  onDecrease={handleDecrease}
                />
                <Text style={styles.winePrice}>R$ {item.price.toFixed(2)}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.calculationContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalPrice}>R$ {calculateTotal().toFixed(2)}</Text>
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
  wineCard: {
    padding: 8,
    marginBottom: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  wineImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  wineName: {
    fontSize: 10,
    textAlign: "center",
  },
  winePrice: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 2,
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
  wineInfo: {
    marginLeft: 10,
  },
  wineCounter: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  counterButton: {
    backgroundColor: "#ddd",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 3,
    marginHorizontal: 5,
  },
  counterButtonText: {
    fontSize: 14,
  },
  counterQuantity: {
    fontSize: 14,
  },
});

export default HomeScreen;
