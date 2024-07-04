import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HeaderBag from "../components/HeaderBag/Header";
import Footer from "../components/Footer";

const BagScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <HeaderBag />
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
