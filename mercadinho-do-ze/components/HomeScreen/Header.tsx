import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import WineTextContainer from "./WineTextContainer";

const HeaderHome: React.FC = () => {
  return (
    <>
      <View style={styles.containerOuter}>
        <Icon name="bell" size={12} color="#F7A833" />
        <Text style={styles.title}>Mercadinho do Zé</Text>
        <Icon name="search" size={18} color="#F7A833" />
      </View>
      <WineTextContainer />
    </>
  );
};

const styles = StyleSheet.create({
  containerOuter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 26,
    paddingLeft: 22,
    paddingRight: 16,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    color: "#323232",
    fontFamily: "Nunito_700Regular",
  },
});

export default HeaderHome;
