import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Footer from "./Footer";

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mercadinho do Zé</Text>
        <View style={styles.searchContainerOuter}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Busca..."
              onChangeText={setSearchQuery}
              value={searchQuery}
            />
            <View style={styles.searchIconContainer}></View>
          </View>
          <Icon name="search" size={20} color="#758494" />
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 10,
    maxWidth: "80%",
  },
  searchContainerOuter: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    padding: 10,
  },
  searchIconContainer: {
    paddingHorizontal: 20,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
});

export default HomeScreen;
