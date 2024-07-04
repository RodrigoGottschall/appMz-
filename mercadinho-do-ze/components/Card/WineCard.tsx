import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
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

const WineCard: React.FC<WineCardProps> = ({
  wine,
  selectedQuantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <View style={styles.wineCard}>
      <Image source={wine.image} style={styles.wineImage} />
      <View style={styles.wineInfo}>
        <Text style={styles.wineName}>{wine.name}</Text>
        <WineCounter
          wineId={wine.id}
          quantity={selectedQuantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <Text style={styles.winePrice}>R$ {wine.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  wineInfo: {
    marginLeft: 10,
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
});

export default WineCard;
