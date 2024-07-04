import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./Header";
import WineTextContainer from "./WinteTextContainer";
import Footer from "./Footer";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Header />
        <WineTextContainer />
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
    padding: 10,
    paddingTop: 50,
    paddingBottom: 20,
  },
});

export default HomeScreen;
