import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import WineCard from "./Card/WineCard";
import { useNavigation } from "@react-navigation/native";
import { useWineContext } from "../../context/WineContext";

const Body = () => {
  // Hook de navegação para ir para a tela BagScreen
  const navigation = useNavigation();

  // Obtém a função addToCart do contexto WineContext
  const { addToCart } = useWineContext();

  // Dados dos vinhos (substitua com seus próprios dados)
  const wines = [
    {
      id: 1,
      name: "Vinho Brasileiro Parreiras do Sul Suave Tinto 1l",
      price: 19.49,
      image: require("../../assets/vinho1.png"),
    },
    {
      id: 2,
      name: "Vinho Brasileiro Pergola Seco Tinto 1L",
      price: 15.99,
      image: require("../../assets/vinho2.png"),
    },
    {
      id: 3,
      name: "Vinho Brasileiro Parreiras do Sul Suave Tinto 1l",
      price: 7.99,
      image: require("../../assets/vinho3.png"),
    },
  ];

  // Estado para armazenar a quantidade de cada vinho selecionado
  const [selectedWines, setSelectedWines] = useState({});

  // Função chamada quando o usuário pressiona um card de vinho
  const handleWinePress = (wineId: number) => {
    // Atualiza o estado selectedWines para aumentar a quantidade do vinho selecionado
    setSelectedWines((prevSelected) => ({
      ...prevSelected,
      [wineId]: (prevSelected[wineId] || 0) + 1,
    }));

    // Encontra o vinho correspondente ao wineId
    const wineItem = wines.find((wine) => wine.id === wineId);
    if (wineItem) {
      // Adiciona o vinho ao carrinho com a quantidade atualizada
      addToCart({ ...wineItem, quantity: selectedWines[wineId] || 0 });
    }
  };

  // Função chamada quando o usuário diminui a quantidade de um vinho
  const handleDecrease = (wineId: number) => {
    setSelectedWines((prevSelected) => {
      const newQuantity = (prevSelected[wineId] || 0) - 1;
      return newQuantity > 0
        ? { ...prevSelected, [wineId]: newQuantity }
        : { ...prevSelected, [wineId]: undefined };
    });
  };

  // Função para calcular o preço total dos vinhos selecionados
  const calculateTotal = () => {
    return wines.reduce((total, wine) => {
      const quantity = selectedWines[wine.id] || 0;
      return total + wine.price * quantity;
    }, 0);
  };

  // Função para calcular o total de itens selecionados
  const calculateTotalItems = () => {
    const quantities = Object.values(selectedWines);
    const validQuantities = quantities.filter((qty) => qty !== undefined);
    return validQuantities.reduce((total, qty) => total + qty, 0);
  };

  return (
    <View style={styles.bodyContainer}>
      {/* Lista plana para exibir os cards de vinho */}
      <FlatList
        data={wines}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => (
          <WineCard
            wine={item}
            selectedQuantity={selectedWines[item.id] || 0}
            onIncrease={handleWinePress}
            onDecrease={handleDecrease}
          />
        )}
      />

      {/* Container para exibir o total e o botão "Ver Sacola" */}
      <View style={styles.calculationContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <View style={styles.valueAndItems}>
            <Text style={styles.totalPrice}>
              R$ {calculateTotal().toFixed(2)}
            </Text>
            <Text style={styles.itemCounterText}>
              {" "}
              / {calculateTotalItems()} item(s)
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.sacolaButton}
          onPress={() => navigation.navigate("BagScreen")}
        >
          <Text style={styles.sacolaButtonText}>Ver Sacola</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    height: 700,
  },
  flatListContent: {
    paddingBottom: 50,
    paddingLeft: 18,
    justifyContent: "space-between",
  },
  calculationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 19,
    paddingBottom: 14,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  totalLabel: {
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 5,
    color: "#878786",
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: "700",
    color: "#494949",
  },
  wineCard: {
    flex: 1,
    margin: 5,
  },
  totalContainer: {
    alignItems: "flex-start",
  },
  itemCounter: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 8,
  },
  itemCounterText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#878786",
    paddingTop: 4,
  },
  valueAndItems: {
    display: "flex",
    flexDirection: "row",
  },
  sacolaButton: {
    backgroundColor: "#F7A833",
    width: 104,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 17,
  },
  sacolaButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
  },
});

export default Body;
