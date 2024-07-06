import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Body: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bodyContainer}>
      <View style={styles.calculationContainer}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.bottomLabel}>Adicionar mais itens</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
  },
  calculationContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 52,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomLabel: {
    paddingTop: 25,
    fontSize: 14,
    fontFamily: "Nunito_700Bold",
    color: "#F7A833",
  },
});

export default Body;
