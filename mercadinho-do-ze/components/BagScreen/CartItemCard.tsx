import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface CartItemCardProps {
  item: {
    name: string;
    price: number;
    image: any;
    quantity: number;
  };
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantity}>{item.quantity} UN</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 50,
    height: 80,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#333",
  },
  quantityContainer: {
    backgroundColor: "#F7A833",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "flex-start",
    marginTop: 5,
  },
  quantity: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CartItemCard;
