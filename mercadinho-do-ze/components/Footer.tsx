import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface FooterProps {
  onTabPress: (tabName: "Inicio" | "Sacola") => void;
  activeTab: "Inicio" | "Sacola";
}

const Footer: React.FC<FooterProps> = ({ onTabPress, activeTab }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => onTabPress("Inicio")}>
        <View>
          <MaterialCommunityIcons
            name={activeTab === "Inicio" ? "home-circle" : "home"}
            size={36}
            color="#fff"
          />
          <Text style={styles.iconLabel}>Início</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onTabPress("Sacola")}>
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
