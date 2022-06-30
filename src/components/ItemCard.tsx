import React from "react";
import { Image, StyleSheet } from "react-native";
import { Box, Text } from "react-native-design-utility";
import { Entypo as Icon } from "@expo/vector-icons";

const styles = StyleSheet.create({
  placeImg: {
    borderRadius: 16,
    height: 150,
    width: 150
  },
  container: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,

    shadowRadius: 3.84
  }
});

const ItemCard = () => {
  return (
    <Box
      dir="row"
      w="100%"
      bg="greyLightest"
      radius={16}
      style={styles.container}
    >
      <Image
        source={{ uri: "http://placekitten.com/g/200/300" }}
        style={styles.placeImg}
      />
      <Box f={1} dir="row" justify="between" py="sm" mx={8}>
        <Text>Boston Terrier</Text>
        <Icon name={"heart"} size={24} color="red" />
      </Box>
    </Box>
  );
};

export default ItemCard;
