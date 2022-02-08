import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import Heart from "../../assets/svg/Heart";

const styles = StyleSheet.create({
  card: {
    height: 175,
    width: 150,
    justifyContent: "flex-start",
    marginRight: 25,
    marginBottom: 25,
    borderRadius: 10,
  },
  bigImage: {
    maxWidth: 150,
    minHeight: 150,
    borderRadius: 10,
    borderWidth: 1,
  },
  name: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    fontFamily: "SFProDisplay-Regular",
    maxWidth: "80%",
    flexWrap: "wrap",
  },
  label: {
    flexDirection: "row",
    marginTop: 5,
  },
  labelWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const FaveItem = ({ uri, onPress, name }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.bigImage}
        source={{
          uri,
        }}
      />

      <TouchableOpacity style={styles.label} onPress={onPress}>
        <View style={styles.labelWrapper}>
          <Text style={styles.name}>{name}</Text>
          <Heart width={16} height={14} color={"#DE0202"} stroke={"#DE0202"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FaveItem;
