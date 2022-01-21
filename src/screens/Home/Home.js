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
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import {
  getCats,
  addFavorites,
  removeFavorites,
} from "../../redux/actions/actions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
    backgroundColor: "#FFF",
  },
  headerWrapper: {
    height: 74,
    justifyContent: "center",
  },
  header: {
    fontFamily: "SFProDisplay-Semibold",
    fontSize: 16,
  },
  item: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    marginTop: 8,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lime",
    // resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    fontFamily: "SFProDisplay-Regular",
    marginLeft: 15,
  },
});

const Home = () => {
  const [loading, setLoading] = useState(true);

  const { cats, favorites } = useSelector((state) => state.catsReducer);
  const dispatch = useDispatch();

  const fetchCats = () => dispatch(getCats(20));

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
  }, []);

  const renderImagesRow = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: item.image.url }} />
        <Text style={styles.name}>{item.name}</Text>
        {/* {selected === null && ( */}
        <TouchableOpacity
          style={{ flex: 1, alignItems: "flex-end" }}
          onPress={() =>
            ifExists(item)
              ? handleRemoveFavorites(item)
              : handleAddFavorites(item)
          }
        >
          <FontAwesome
            name={"heart"}
            color={ifExists(item) ? "red" : "gray"}
            size={18}
          />
        </TouchableOpacity>
        {/* )} */}
      </View>
    );
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
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>All Cats</Text>
      </View>

      <FlatList
        data={cats}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderImagesRow}
      />
    </View>
  );
};

export default Home;
