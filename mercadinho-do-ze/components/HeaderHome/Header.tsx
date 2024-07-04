import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header: React.FC = () => {
  return (
    <View style={styles.containerOuter}>
      <Icon name="bell" size={20} color="#F7A833" />
      <Text style={styles.title}>Mercadinho do Zé</Text>
      <Icon name="search" size={20} color="#F7A833" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerOuter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#323232",
  },
});

export default Header;
