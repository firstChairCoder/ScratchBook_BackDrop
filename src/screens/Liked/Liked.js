import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { removeFavorites } from "../../redux/actions/actions";

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
  card: {
    height: 175,
    width: 150,
    // flex: 1,
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
    // resizeMode: "contain",
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
              {
                aspectRatio:
                  width / height === undefined ? 3 / 2 : width / height,
              },
              styles.bigImage,
            ]}
            source={{ uri: item?.image?.url }}
            resizeMode={"contain"}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <TouchableOpacity onPress={() => handleRemoveFavorites(item)}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.name}>{item.name}</Text>
                <FontAwesome name={"heart"} size={15} color={"red"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  //   if (loading) {
  //     return (
  //       <View style={{ flex: 1, padding: 24 }}>
  //         <ActivityIndicator size={"large"} color={"maroon"} />
  //       </View>
  //     );
  //   }

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>All Cats</Text>
      </View>

      <View style={{ flex: 1, marginTop: 8 }}>
        {favorites.length === 0 ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 16, fontFamily: "SFProDisplay-Regular" }}>
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
          />
        )}
      </View>
    </View>
  );
};

export default Liked;
