/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useRef } from "react";
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

import Heart from "../../../assets/svg/Heart";

import Header from "../../components/Header";
import Loading from "../../components/Loading";
import ListItem from "../../components/ListItem";

const { width, height } = Dimensions.get("window");
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
  // const scrollY = useRef(new Animated.Value(0)).current;
  // const ITEM_SIZE = ITEM_HEIGHT + 25;

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

  const ifExists = (cat) => {
    if (favorites.filter((item) => item.id === cat.id).length > 0) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCats();
      setLoading(false);
    }, 1500);
  }, []);

  function renderImagesRow({ item }) {
    return (
      <ListItem
        uri={item?.image?.url}
        name={item.name}
        color={ifExists(item) ? "#DE0202" : "transparent"}
        stroke={ifExists(item) ? "#DE0202" : "rgba(33, 34, 39, 0.2)"}
        onHeartPress={() =>
          ifExists(item)
            ? handleRemoveFavorites(item)
            : handleAddFavorites(item)
        }
      />
    );
  }
  const handleLoadMore = () => {
    setAmount(amount + 15);
    setNewLoading(true);
    setTimeout(() => {
      fetchCats();
      setNewLoading(false);
    }, 1500);
  };

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
        // onScroll={Animated.event(
        //   [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        //   { useNativeDriver: false }
        // )}
        getItemLayout={getItemLayout}
        maxToRenderPerBatch={20}
        windowSize={15}
        onEndReached={cats.length > 0 ? handleLoadMore : null}
        onEndReachedThreshold={0}
      />
      {newLoading && <ActivityIndicator size={"large"} color={"maroon"} />}
    </View>
  );
};

export default Home;
