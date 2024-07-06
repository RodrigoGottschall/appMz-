import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { WineCounterProps } from "../../context/WineContext";

const Counter: React.FC<WineCounterProps> = ({
  wineId,
  onIncrease,
  onDecrease,
  onPress,
  quantity,
}) => {
  const showDecreaseButton = quantity > 0;

  const handleIncrease = () => {
    onIncrease(wineId);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onDecrease();
    }
  };

  const containerStyle = showDecreaseButton
    ? styles.counterContainer
    : { ...styles.counterContainer, width: 26 };

  return (
    <View style={containerStyle}>
      {showDecreaseButton ? (
        <TouchableOpacity onPress={handleDecrease}>
          <Text style={styles.counterButtonText}>-</Text>
        </TouchableOpacity>
      ) : null}
      <Text style={styles.counterQuantity}>
        {quantity > 0 ? `${quantity} UN` : ""}
      </Text>
      <TouchableOpacity onPress={onPress || handleIncrease}>
        <View style={styles.buttonContainer}>
          <Text
            style={
              showDecreaseButton
                ? styles.counterButtonText
                : styles.singlePlusButton
            }
          >
            +
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#FFA91E",
    width: 67,
    height: 25,
    position: "absolute",
    left: 250,
    bottom: 13,
  },
  counterButtonText: {
    fontSize: 15,
    width: 10,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  singlePlusButton: {
    width: 18,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    color: "#fff",
  },
  counterQuantity: {
    fontSize: 10,
    marginHorizontal: 5,
    color: "#fff",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Counter;
