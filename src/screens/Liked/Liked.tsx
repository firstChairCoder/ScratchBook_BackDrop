import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { removeFavorites } from "../../redux/actions/actions";
import Header from "../../components/Header";
import FaveItem from "../../components/FaveItem";
import EmptyFaveList from "../../components/EmptyFaveList";
import type { Cat } from "../../types";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20
  }
});

const Liked = () => {
  const { favorites } = useSelector((state) => state.catsReducer);
  const dispatch = useDispatch();

  const removeFromFavorites = (cat: Cat) => dispatch(removeFavorites(cat));

  const handleRemoveFavorites = (cat: Cat) => {
    removeFromFavorites(cat);
  };

  function renderImagesRow({ item }: any) {
    return (
      <FaveItem
        uri={
          item?.image?.url ?? "https://img.icons8.com/ios-filled/3x/github.png"
        } //variable image display
        onPress={() => handleRemoveFavorites(item)}
        name={item.name}
      />
    );
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <Header label={"Cats I Like"} />

      <View style={{ flex: 1, marginTop: 8 }}>
        {favorites.length === 0 ? (
          <EmptyFaveList />
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
