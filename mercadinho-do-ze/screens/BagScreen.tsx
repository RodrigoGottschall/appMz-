import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HeaderHome from "../components/HeaderHome/Header";
import WineTextContainer from "../components/HeaderHome/WineTextContainer";
import Footer from "../components/Footer";

const BagScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <HeaderHome />
        <WineTextContainer />
      </View>
      <Text>Sacola screen</Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 50,
    paddingBottom: 20,
  },
});

export default BagScreen;
