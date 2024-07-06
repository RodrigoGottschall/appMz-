import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import WineContContainer from "./WineContContainer";
import { useWineContext } from "../../context/WineContext";

const Header: React.FC = () => {
  const { removeAllItems } = useWineContext();

  const handleRemoveAll = () => {
    removeAllItems();
  };

  return (
    <>
      <View style={styles.containerOuter}>
        <View style={styles.content}>
          <Text style={[styles.title, styles.absoluteCenter]}>Sacola</Text>
          <TouchableOpacity onPress={handleRemoveAll}>
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
    fontFamily: "Nunito_800ExtraBold",
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
    fontFamily: "Nunito_600SemiBold",
  },
});

export default Header;
