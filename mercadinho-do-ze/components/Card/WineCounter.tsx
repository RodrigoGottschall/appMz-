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
      width: showDecreaseButton ? 100 : 50,
      backgroundColor: quantity > 0 ? "#FFA91E" : "#FFA91E",
    }),
    [showDecreaseButton, quantity]
  );

  return (
    <View style={containerStyle}>
      {showDecreaseButton && (
        <TouchableOpacity onPress={handleDecrease} style={styles.counterButton}>
          <Text style={styles.counterButtonText}>-</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.counterQuantity}>
        {quantity > 0 ? `${quantity} UN` : ""}
      </Text>
      <TouchableOpacity onPress={handleIncrease} style={styles.counterButton}>
        <Text style={styles.counterButtonText}>+</Text>
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
    borderRadius: 13, // Borda mais arredondada
    backgroundColor: "#FFA91E", // Cor de fundo fixa
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1, // Adiciona borda
    borderColor: "#fff", // Cor da borda
  },

  counterButton: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 3,
    backgroundColor: "#8B0000", // Cor de fundo vermelho mais escuro
  },
  counterButtonText: {
    fontSize: 16, // Aumenta o tamanho da fonte
    fontWeight: "bold", // Texto em negrito
    color: "#fff",
  },
  counterQuantity: {
    fontSize: 14,
    marginHorizontal: 5,
    color: "#fff",
  },
});

export default WineCounter;
