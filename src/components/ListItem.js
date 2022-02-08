/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

import Heart from "../../assets/svg/Heart";

const { width, height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.05;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    height: ITEM_HEIGHT,
    alignItems: "center",
    marginVertical: height * 0.0125,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
  },
  name: {
    fontSize: 14,
    fontFamily: "SFProDisplay-Regular",
    marginLeft: 15,
  },
  btn: {
    flex: 1,
    width: 60,
    alignSelf: "flex-end",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export const ListItem = ({ uri, name, onHeartPress, color, stroke }) => {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri }} />
      <Text style={styles.name}>{name}</Text>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={onHeartPress}
          accessibilityLabel={"Like me"}
        >
          <Heart width={18} height={16} color={color} stroke={stroke} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
