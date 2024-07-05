import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderHome from "../components/HomeScreen/Header";
import Footer from "../components/Footer";
import HomeBody from "../components/HomeScreen/HomeBody";

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
