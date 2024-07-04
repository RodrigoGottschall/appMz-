import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import WineTextContainer from "./WinteTextContainer";
import Footer from "./Footer";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerOuter}>
          <Icon name="bell" size={20} color="#F7A833" />
          <Text style={styles.title}>Mercadinho do Zé</Text>
          <Icon name="search" size={20} color="#F7A833" />
        </View>
        <WineTextContainer />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 50,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#323232",
  },
  containerOuter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  wineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
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

export default HomeScreen;
