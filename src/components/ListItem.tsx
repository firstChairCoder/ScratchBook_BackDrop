import React, { FC, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import Heart from "../../assets/svg/Heart";
import ActivityIndicator from "./ActivityIndicator";

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.05;

const ITEM_SIZE = 40;
const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    borderBottomColor: "lightgray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    height: ITEM_HEIGHT,
    marginVertical: height * 0.0125,
    paddingBottom: 8
  },
  image: {
    borderRadius: 10,
    borderWidth: 1,
    height: ITEM_SIZE,
    width: ITEM_SIZE
  },
  name: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 14,
    marginLeft: 15
  },
  btn: {
    alignItems: "flex-end",
    alignSelf: "flex-end",
    flex: 1,
    justifyContent: "center",
    width: 60
  }
});

interface ListItemProps {
  uri: string;
  name: string;
  onHeartPress: () => void;
  color: string;
  stroke: string;
}

export const ListItem: FC<ListItemProps> = ({
  uri,
  name,
  onHeartPress,
  color,
  stroke
}) => {
  const [imageLoad, setImageLoad] = useState(false);

  return (
    <View style={styles.item}>
      {imageLoad && (
        <View
          style={{
            width: ITEM_SIZE,
            height: ITEM_SIZE,
            position: "absolute"
          }}
        >
          <ActivityIndicator source={`loader`} visible={imageLoad} />
        </View>
      )}
      <Image
        style={styles.image}
        source={{ uri }}
        onLoadStart={() => setImageLoad(true)}
        onLoadEnd={() => setImageLoad(false)}
        onLoad={() => setImageLoad(false)}
      />
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
