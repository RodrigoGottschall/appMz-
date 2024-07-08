import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import WineTextContainer from "./WineTextContainer";
import { useWineContext } from "../../context/WineContext";

const HeaderHome: React.FC = () => {
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [notificationModalVisible, setNotificationModalVisible] =
    useState(false);
  const [searchText, setSearchText] = useState("");
  const { filterWines } = useWineContext();

  const handleBellPress = () => {
    setNotificationModalVisible(true);
  };

  const handleSearchPress = () => {
    setSearchModalVisible(true);
  };

  return (
    <>
      <View style={styles.containerOuter}>
        <TouchableOpacity onPress={handleBellPress}>
          <Icon name="bell" size={12} color="#F7A833" />
        </TouchableOpacity>
        <Text style={styles.title}>Mercadinho do Zé</Text>
        <TouchableOpacity onPress={handleSearchPress}>
          <Icon name="search" size={18} color="#F7A833" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={searchModalVisible}
        onRequestClose={() => setSearchModalVisible(false)}
      >
        <View style={styles.searchModalContainer}>
          <View style={styles.searchModalContent}>
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar produtos..."
              value={searchText} // Usar o estado local
              onChangeText={(text) => {
                setSearchText(text); // Atualizar o estado local
                filterWines(text); // Passar o texto diretamente para a função de filtro
              }}
            />
            <TouchableOpacity onPress={() => setSearchModalVisible(false)}>
              <Text style={styles.closeButton}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={notificationModalVisible}
        onRequestClose={() => setNotificationModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Não há notificações</Text>
            <TouchableOpacity
              onPress={() => setNotificationModalVisible(false)}
            >
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
  searchModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchModalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
});

export default HeaderHome;
