/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  getCats,
  getMoreCats,
  addFavorites,
  removeFavorites,
} from "../../redux/actions/actions";

import Heart from "../../../assets/svg/Heart";
import Header from "../../components/Header";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: height * 0.025,
    backgroundColor: "#FFF",
  },
  item: {
    flexDirection: "row",
    height: height * 0.05,
    alignItems: "center",
    marginVertical: height * 0.0125,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lime",
  },
  name: {
    fontSize: 14,
    fontFamily: "SFProDisplay-Regular",
    marginLeft: 15,
  },
});

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const { cats, favorites } = useSelector((state) => state.catsReducer);
  const dispatch = useDispatch();

  const fetchCats = () => dispatch(getCats(100, page));

  // const fetchMoreCats = () => dispatch(getMoreCats(15, page));

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
    fetchCats();
    setLoading(false);
  }, [page >= 1]);

  const renderImagesRow = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: item?.image?.url }} />
        <Text style={styles.name}>{item.name}</Text>
        {/* {selected === null && ( */}
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              flex: 1,
              width: 60,
              alignSelf: "flex-end",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            onPress={() =>
              ifExists(item)
                ? handleRemoveFavorites(item)
                : handleAddFavorites(item)
            }
          >
            <Heart
              width={18}
              height={16}
              color={ifExists(item) ? "#DE0202" : "transparent"}
              stroke={ifExists(item) ? "#DE0202" : "rgba(33, 34, 39, 0.2)"}
            />
          </TouchableOpacity>
        </View>
        {/* )} */}
      </View>
    );
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"maroon"} />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <Header label="All Cats" />

      <FlatList
        data={cats}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderImagesRow}
        initialNumToRender={20}
        onEndReached={handleLoadMore}
        // onEndReachedThreshold={10}
      />
    </View>
  );
};

export default Home;
