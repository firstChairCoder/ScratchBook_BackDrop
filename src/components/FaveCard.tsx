import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: 175,
    justifyContent: "flex-start",
    marginBottom: 25,
    marginRight: 25,
    width: 150
  },
  bigImage: {
    borderRadius: 10,
    borderWidth: 1,
    maxWidth: 150,
    minHeight: 150
  },
  name: {
    flexWrap: "wrap",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    maxWidth: "80%"
  },
  label: {
    flexDirection: "row",
    marginTop: 5
  },
  labelWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});

const FaveCard = () => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.bigImage}
        source={{
          uri: "http://placekitten.com/g/200/300"
        }}
      />

      <TouchableOpacity style={styles.label} onPress={() => true}>
        <View style={styles.labelWrapper}>
          <Text style={styles.name}>Kitty</Text>
          <Icon name={"heart"} size={24} color="#DE0202" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FaveCard;
