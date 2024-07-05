import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import HeaderHome from "../components/HeaderHome/Header";
import Footer from "../components/Footer";
import HomeBody from "../components/HomeBody";

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <HeaderHome />
        <HomeBody />
      </View>
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
    paddingTop: 50,
  },
});

export default HomeScreen;
