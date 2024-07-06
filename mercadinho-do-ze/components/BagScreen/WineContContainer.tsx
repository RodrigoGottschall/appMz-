import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useWineContext } from "../../context/WineContext";

const WineContContainer: React.FC = () => {
  const { cartItems } = useWineContext();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const formatQuantity = (quantity: number) => {
    return quantity < 10 ? `0${quantity}` : quantity.toString();
  };

  return (
    <View style={styles.wineContainer}>
      <Text style={styles.wineText}>
        Vinhos ({formatQuantity(totalQuantity)})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  wineText: {
    fontSize: 12,
    color: "#606060",
    fontFamily: "Nunito_400Regular",
    paddingLeft: 17,
  },
});

export default WineContContainer;
