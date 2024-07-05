import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import WineContContainer from "./WineContContainer";

const HeaderHome: React.FC = () => {
  return (
    <>
      <View style={styles.containerOuter}>
        <View style={styles.content}>
          <Text style={[styles.title, styles.absoluteCenter]}>Sacola</Text>
          <TouchableOpacity>
            <Text style={styles.bagClean}>Limpar sacola</Text>
          </TouchableOpacity>
        </View>
      </View>
      <WineContContainer />
    </>
  );
};

const styles = StyleSheet.create({
  containerOuter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 26,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#323232",
  },
  absoluteCenter: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
  },
  bagClean: {
    color: "#EB4132",
    fontSize: 11,
  },
});

export default HeaderHome;
