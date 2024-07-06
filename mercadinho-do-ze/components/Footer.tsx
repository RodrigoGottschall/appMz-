import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcons from "react-native-vector-icons/Ionicons";
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
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={"home-circle"} size={40} color="#fff" />
          <Text style={styles.iconLabelHome}>Início</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("BagScreen")}>
        <View style={styles.iconContainerBag}>
          <IonIcons
            name="bag-outline"
            size={28}
            color="#fff"
            style={styles.BagIcon}
          />
          <Text style={styles.iconLabelBag}>Sacola</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: "#F7A833",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    alignItems: "center",
  },
  iconContainerBag: {
    alignItems: "center",
    paddingLeft: 49,
  },
  iconLabelHome: {
    color: "#fff",
    fontSize: 12,
    paddingBottom: 10,
  },
  iconLabelBag: {
    color: "#fff",
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 20,
  },
  BagIcon: {
    paddingTop: 11,
  },
});

export default Footer;
