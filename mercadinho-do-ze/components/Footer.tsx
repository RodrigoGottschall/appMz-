import React from "react";
import { View, StyleSheet } from "react-native";

interface FooterProps {
  iconColor?: string;
  iconSize?: number;
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <View style={styles.footer}>
      <View style={styles.iconButton}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#F7A833",
    backgroundColor: "#F7A833",
  },
  iconButton: {
    alignItems: "center",
  },
});

export default Footer;
