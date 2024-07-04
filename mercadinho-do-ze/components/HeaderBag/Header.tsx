import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import WineContContainer from "./WineContContainer";

const HeaderHome: React.FC = () => {
  return (
    <>
      <View style={styles.containerOuter}>
        <Text style={styles.title}>Sacola</Text>
        <TouchableOpacity>
          <Text>Limpar Sacola</Text>
        </TouchableOpacity>
      </View>
      <WineContContainer />
    </>
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

export default HeaderHome;
