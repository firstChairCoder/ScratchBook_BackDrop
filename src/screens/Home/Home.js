import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  getCats,
  addFavorites,
  removeFavorites,
} from "../../redux/actions/actions";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { ListItem } from "../../components/ListItem";

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: height * 0.025,
    backgroundColor: "#FFF",
  },
});

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [newLoading, setNewLoading] = useState(false);
  const [amount, setAmount] = useState(15);

  const { cats, favorites } = useSelector((state) => state.catsReducer);
  const dispatch = useDispatch();

  const fetchCats = () => dispatch(getCats(amount));

  const addToFavorites = (cat) => dispatch(addFavorites(cat));
  const removeFromFavorites = (cat) => dispatch(removeFavorites(cat));

  const handleAddFavorites = (cat) => {
    addToFavorites(cat);
  };

  const handleRemoveFavorites = (cat) => {
    removeFromFavorites(cat);
  };

  const ifLiked = (cat) => {
    if (favorites.filter((item) => item.id === cat.id).length > 0) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCats();
      setLoading(false);
    }, 3000);
  }, []);

  function renderImagesRow({ item }) {
    return (
      <ListItem
        uri={
          item?.image?.url ?? "https://img.icons8.com/ios-filled/2x/github.png"
        } //variable image display
        name={item.name}
        color={ifLiked(item) ? "#DE0202" : "transparent"}
        stroke={ifLiked(item) ? "#DE0202" : "rgba(33, 34, 39, 0.2)"}
        onHeartPress={() =>
          ifLiked(item) ? handleRemoveFavorites(item) : handleAddFavorites(item)
        }
      />
    );
  }

  //dynamic scroll load handler
  const handleLoadMore = useCallback(() => {
    setAmount(amount + 15);
    setNewLoading(true);
    setTimeout(() => {
      fetchCats();
      setNewLoading(false);
    }, 2000);
  }, [amount]);

  //Callback method to adjust variable sized images to fit the given layout without cropping
  const getItemLayout = useCallback(
    (_, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    []
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <Header label="All Cats" />
      {/* list */}
      <FlatList
        data={cats}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderImagesRow}
        removeClippedSubviews
        renderToHardwareTextureAndroid
        getItemLayout={getItemLayout}
        onEndReached={cats.length > 0 ? handleLoadMore : null}
        onEndReachedThreshold={0.2}
      />
      {newLoading && <ActivityIndicator size={"large"} color={"maroon"} />}
    </View>
  );
};

export default Home;
