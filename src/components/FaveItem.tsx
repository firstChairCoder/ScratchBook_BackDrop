import React, { FC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Heart from "../../assets/svg/Heart";

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
    fontFamily: "SFProDisplay-Regular",
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

interface FaveItemProps {
  uri: string;
  onPress: () => void;
  name: string;
}

const FaveItem: FC<FaveItemProps> = ({ uri, onPress, name }) => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.bigImage}
        source={{
          uri
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
