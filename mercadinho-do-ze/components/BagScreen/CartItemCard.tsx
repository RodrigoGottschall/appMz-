import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CartItemCardProps } from "../../context/WineContext";
import Counter from "./Counter";

const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  onRemove,
  onIncrease,
  onDecrease,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
        </View>

        <Counter
          wineId={item.id}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          quantity={item.quantity}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 50,
    height: 80,
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 208,
    height: 37,
  },
  name: {
    fontSize: 11,
    fontFamily: "Nunito_400Regular",
    textTransform: "uppercase",
  },
  price: {
    fontSize: 12,
    fontFamily: "Nunito_700Bold",
  },
  quantityContainer: {
    backgroundColor: "red",
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
  button: {
    paddingHorizontal: 5,
  },
});

export default CartItemCard;
