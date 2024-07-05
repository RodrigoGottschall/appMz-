import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import WineCounter from "./WineCounter";

interface WineCardProps {
  wine: {
    id: number;
    name: string;
    price: number;
    image: any;
  };
  selectedQuantity: number;
  onIncrease: (wineId: number) => void;
  onDecrease: (wineId: number) => void;
}

const WineCard = ({ wine, selectedQuantity, onIncrease, onDecrease }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={wine.image} style={styles.wineImage} />

      <View style={styles.priceContainer}>
        <Text style={styles.winePrice}>R$ {wine.price.toFixed(2)}</Text>
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.wineName}>{wine.name}</Text>
      </View>

      <WineCounter
        wineId={wine.id}
        quantity={selectedQuantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    padding: 10,
    margin: 5,
  },
  wineImage: {
    width: 100,
    height: 150,
    resizeMode: "contain",
    marginBottom: 5,
  },
  priceContainer: {
    marginBottom: 5,
  },
  winePrice: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#00644B",
  },
  nameContainer: {
    width: 100,
    flexDirection: "row",
  },
  wineName: {
    flex: 1,
    fontSize: 8,
  },
});

export default WineCard;
