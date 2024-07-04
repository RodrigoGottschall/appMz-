import React, { useState, useEffect } from "react";
import { View } from "react-native";
import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import store from "./store";
import { Provider } from "react-redux";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        {isLoading ? (
          <LoadingScreen logoSource={require("./assets/logo.png")} />
        ) : (
          <HomeScreen />
        )}
      </View>
    </Provider>
  );
};

export default App;
