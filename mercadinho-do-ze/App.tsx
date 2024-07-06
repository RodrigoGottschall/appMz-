import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import BagScreen from "./screens/BagScreen";
import { WineProvider } from "./context/WineContext";
import { CounterProvider } from "./context/CounterContext";

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <CounterProvider>
      <WineProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false, animationEnabled: false }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="BagScreen" component={BagScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </WineProvider>
    </CounterProvider>
  );
};

export default App;
