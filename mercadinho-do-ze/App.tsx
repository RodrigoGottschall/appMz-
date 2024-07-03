import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import LoadingScreen from "./components/LoadingScreen";
import HomeScreen from "./components/HomeScreen";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <LoadingScreen logoSource={require("./assets/logo.png")} />
      ) : (
        <HomeScreen />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
