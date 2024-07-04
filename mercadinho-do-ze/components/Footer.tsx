import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

interface FooterProps {
  onTabPress: (tabName: "Inicio" | "Sacola") => void;
  activeTab: "Inicio" | "Sacola";
}

const Footer: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <View>
          <MaterialCommunityIcons name={"home-circle"} size={36} color="#fff" />
          <Text style={styles.iconLabel}>Início</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("BagScreen")}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="shopping" size={24} color="#fff" />
          <Text style={styles.iconLabel}>Sacola</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: "#F7A833",
  },
  iconContainer: {
    alignItems: "center",
  },
  iconLabel: {
    color: "#fff",
    fontSize: 12,
  },
});

export default Footer;
