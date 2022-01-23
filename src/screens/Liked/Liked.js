/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { removeFavorites } from "../../redux/actions/actions";

import Heart from "../../../assets/svg/Heart";

import Header from "../../components/Header";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
    backgroundColor: "#FFF",
  },
  fillerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fillerText: {
    fontSize: 16,
    fontFamily: "SFProDisplay-Regular",
  },
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
    borderColor: "lime",
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
});

const Liked = () => {
  const { favorites } = useSelector((state) => state.catsReducer);
  const dispatch = useDispatch();

  const removeFromFavorites = (cat) => dispatch(removeFavorites(cat));

  const handleRemoveFavorites = (cat) => {
    removeFromFavorites(cat);
  };

  const renderImagesRow = ({ item }) => {
    const width = item?.image?.width;
    const height = item?.image?.height;
    if (width === undefined) {
      return <></>;
    } else {
      return (
        <View style={styles.card}>
          <Image
            style={[
              // {
              //   aspectRatio:
              //     width / height === undefined ? 3 / 2 : width / height,
              // },
              styles.bigImage,
            ]}
            source={{ uri: item?.image?.url }}
          />

          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginTop: 5,
            }}
            onPress={() => handleRemoveFavorites(item)}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.name}>{item.name}</Text>
              <Heart
                width={16}
                height={14}
                color={"#DE0202"}
                stroke={"#DE0202"}
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header label={"Cats I Like"} />

      <View style={{ flex: 1, marginTop: 8 }}>
        {favorites.length === 0 ? (
          <View style={styles.fillerWrapper}>
            <Text style={styles.fillerText}>
              Your favorites will be displayed here
            </Text>
          </View>
        ) : (
          <FlatList
            data={favorites}
            showsVerticalScrollIndicator={false}
            bounces={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderImagesRow}
            numColumns={2}
          />
        )}
      </View>
    </View>
  );
};

export default Liked;
