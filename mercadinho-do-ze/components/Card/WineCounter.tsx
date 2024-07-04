import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface WineCounterProps {
  wineId: number;
  quantity: number;
  onIncrease: (wineId: number) => void;
  onDecrease: (wineId: number) => void;
}

const WineCounter: React.FC<WineCounterProps> = ({
  wineId,
  quantity,
  onIncrease,
  onDecrease,
}) => (
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

const styles = StyleSheet.create({
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

export default WineCounter;
