import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import WineTextContainer from "../components/WineTextContainer";
import Footer from "../components/Footer";

const HomeScreen: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<"Inicio" | "Sacola">(
    "Inicio"
  );

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Header />
        <WineTextContainer />
      </View>
      <Text>Home Screen</Text>
      <Footer
        onTabPress={(tabName) => setActiveScreen(tabName)}
        activeTab={activeScreen}
      />
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
