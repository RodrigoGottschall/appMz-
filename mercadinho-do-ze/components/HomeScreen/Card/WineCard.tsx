import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import WineCounter from "./Counter";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { useWineContext, WineCardProps } from "../../../context/WineContext";

const WineCard: React.FC<WineCardProps> = ({
  wine,
  onIncrease,
  onDecrease,
}) => {
  const { removeFromCart } = useWineContext();

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
        onIncrease={() => onIncrease(wine.id)}
        onDecrease={() => onDecrease(wine.id)}
        quantity={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    width: 125,
    height: 103,
    paddingTop: 16,
    paddingLeft: 13,
  },
  wineImage: {
    width: 68,
    height: 66,
    resizeMode: "contain",
    marginBottom: 5,
  },
  priceContainer: {
    marginBottom: 5,
  },
  winePrice: {
    fontSize: 10,
    fontFamily: "Inter_700Bold",
    color: "#00644B",
  },
  nameContainer: {
    width: 100,
    flexDirection: "row",
  },
  wineName: {
    flex: 1,
    fontSize: 8,
    fontFamily: "Nunito_400Regular",
  },
});

export default WineCard;
