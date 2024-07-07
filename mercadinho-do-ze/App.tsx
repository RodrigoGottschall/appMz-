import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import BagScreen from "./screens/BagScreen";
import { WineProvider } from "./context/WineContext";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Inter_400Regular,
    Inter_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  } else {
    return (
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
    );
  }
};

export default App;
