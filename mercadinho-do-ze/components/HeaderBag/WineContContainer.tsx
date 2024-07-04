import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WineContContainer: React.FC = () => {
  return (
    <View style={styles.wineContainer}>
      <Text style={styles.wineText}>Vinhos</Text>
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
    color: "#323232",
    fontWeight: "700",
  },
  verMaisText: {
    fontSize: 12,
    color: "#00644B",
    fontWeight: "700",
  },
});

export default WineContContainer;
