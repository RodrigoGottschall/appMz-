import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const WineTextContainer: React.FC = () => {
  return (
    <View style={styles.wineContainer}>
      <Text style={styles.wineText}>Vinhos</Text>
      <TouchableOpacity>
        <Text style={styles.verMaisText}>Ver mais</Text>
      </TouchableOpacity>
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

export default WineTextContainer;
