import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const WineTextContainer: React.FC = () => {
  const handleOpenLink = () => {
    Linking.openURL("https://www.mercadinhodoze.com.br/");
  };

  return (
    <View style={styles.wineContainer}>
      <Text style={styles.wineText}>Vinhos</Text>
      <TouchableOpacity onPress={handleOpenLink}>
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
    paddingLeft: 17,
    paddingRight: 16,
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
