import React, { useState, useMemo } from "react";
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
}) => {
  const [showDecreaseButton, setShowDecreaseButton] = useState(quantity > 0);

  const handleIncrease = () => {
    onIncrease(wineId);
    setShowDecreaseButton(true);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      onDecrease(wineId);
      if (quantity === 1) {
        setShowDecreaseButton(false);
      }
    }
  };

  const containerStyle = useMemo(
    () => ({
      ...styles.counterContainer,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: showDecreaseButton ? 100 : 50,
      backgroundColor: quantity > 0 ? "#FFA91E" : "#FFA91E",
    }),
    [showDecreaseButton, quantity]
  );

  return (
    <View style={containerStyle}>
      {showDecreaseButton && (
        <TouchableOpacity onPress={handleDecrease}>
          <Text style={styles.counterButtonTextDecrease}>-</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.counterQuantity}>
        {quantity > 0 ? `${quantity} UN` : ""}
      </Text>
      <TouchableOpacity onPress={handleIncrease}>
        <Text style={styles.counterButtonTextIncrease}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wineCounter: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFA91E",
  },
  counterContainer: {
    width: 26,
    height: 26,
    borderRadius: 20,
    backgroundColor: "#FFA91E",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  counterButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  counterButtonTextIncrease: {
    color: "#fff",
  },
  counterButtonTextDecrease: {
    color: "#fff",
    paddingRight: 12,
  },
  counterQuantity: {
    fontSize: 14,
    marginHorizontal: 5,
    color: "#fff",
    position: "absolute",
  },
});

export default WineCounter;
