/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { removeFavorites } from "../../redux/actions/actions";

import Header from "../../components/Header";
import { FaveItem } from "../../components/FaveItem";

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
});

const Liked = () => {
  const { favorites } = useSelector((state) => state.catsReducer);
  const dispatch = useDispatch();

  const removeFromFavorites = (cat) => dispatch(removeFavorites(cat));

  const handleRemoveFavorites = (cat) => {
    removeFromFavorites(cat);
  };

  function renderImagesRow({ item }) {
    const width = item?.image?.width;
    if (width === undefined) {
      return <></>;
    } else {
      return (
        <FaveItem
          uri={item?.image?.url}
          onPress={() => handleRemoveFavorites(item)}
          name={item.name}
        />
      );
    }
  }

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
