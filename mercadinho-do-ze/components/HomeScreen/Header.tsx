import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import WineTextContainer from "./WineTextContainer";

const HeaderHome: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleBellPress = () => {
    setModalVisible(true);
  };

  return (
    <>
      <View style={styles.containerOuter}>
        <TouchableOpacity onPress={handleBellPress}>
          <Icon name="bell" size={12} color="#F7A833" />
        </TouchableOpacity>
        <Text style={styles.title}>Mercadinho do Zé</Text>
        <Icon name="search" size={18} color="#F7A833" />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Não há notificações</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <WineTextContainer />
    </>
  );
};

const styles = StyleSheet.create({
  containerOuter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 26,
    paddingLeft: 22,
    paddingRight: 16,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    color: "#323232",
    fontFamily: "Nunito_700Bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  closeButton: {
    color: "#F7A833",
  },
});

export default HeaderHome;
