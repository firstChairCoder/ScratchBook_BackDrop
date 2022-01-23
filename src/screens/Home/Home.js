/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
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

const { width, height } = Dimensions.get("window");
const ITEM_HEIGHT = height * 0.05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: height * 0.025,
    backgroundColor: "#FFF",
  },
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

const Home = () => {
  const [loading, setLoading] = useState(true);
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

  const ifExists = (cat) => {
    if (favorites.filter((item) => item.id === cat.id).length > 0) {
      return true;
    }

    return false;
  };

  useEffect(() => {
    fetchCats();
    setLoading(false);
  }, [amount]);

  const renderImagesRow = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: item?.image?.url }} />
        <Text style={styles.name}>{item.name}</Text>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
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
      </View>
    );
  };

  const handleLoadMore = () => {
    setAmount(amount + 15);
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
        getItemLayout={getItemLayout}
        maxToRenderPerBatch={20}
        windowSize={15}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={50}
      />
    </View>
  );
};

export default Home;
