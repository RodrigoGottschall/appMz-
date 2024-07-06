import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import BagScreen from "./screens/BagScreen";
import { WineProvider } from "./context/WineContext";
import { CounterProvider } from "./context/CounterContext";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito"; // Expo

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (!fontsLoaded) {
    return (
      <LoadingScreen
        logoSource={{
          uri: "./assets/logo.png",
        }}
      />
    );
  } else {
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
  }
};

export default App;
