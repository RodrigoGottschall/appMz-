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
    backgroundColor: "#F9F9F9",
  },
  wineText: {
    fontSize: 12,
    color: "#606060",
    fontWeight: "400",
    paddingLeft: 17,
  },
  verMaisText: {
    fontSize: 12,
    color: "#00644B",
    fontWeight: "700",
  },
  counterContainer: {
    backgroundColor: "#00644B", // Cor de fundo do contador (verde)
    borderRadius: 20, // Borda arredondada
    paddingVertical: 4, // Espaçamento vertical
    paddingHorizontal: 8, // Espaçamento horizontal
    marginLeft: 8, // Margem à esquerda do texto "Vinhos"
  },
  counterText: {
    color: "#fff", // Cor do texto (branco)
    fontWeight: "bold", // Negrito
    fontSize: 12, // Tamanho da fonte
  },
});

export default WineContContainer;
