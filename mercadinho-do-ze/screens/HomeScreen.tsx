import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/HomeScreen/Header";
import Footer from "../components/Footer";
import Body from "../components/HomeScreen/Body";
import { useWineContext, WineItem } from "../context/WineContext";

import LoadingScreen from "./LoadingScreen";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.screen}>
      {isLoading ? (
        <LoadingScreen
          logoSource={{
            uri: "../assets/logo/png",
          }}
        />
      ) : (
        <View style={styles.container}>
          <Header />
          <Body />
        </View>
      )}
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
