import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

import type { Routes, TabNavigationProps } from "../../components/Navigation";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#FFF",
  },
  headerWrapper: {
    height: 74,
    justifyContent: "center",
  },
  header: {
    fontFamily: "Montserrat-Bold",
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
    fontFamily: "Montserrat-Regular",
    marginLeft: 15,
  },
});

interface Cat {
  image: any;
  name: string;
  url: string;
  rightIcon: any;
}

const HomeScreen = ({ navigation, route }: TabNavigationProps<Routes, "Home">) => {
    const params = route.params || {}
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState("https://cdn2.thecatapi.com/images/MTY0Mjk0Mw.jpg")
  const [images, setImages] = useState([]);
  //   const [breed, setBreed] = useState("beng");
  const [state, setState] = useState(false);
  const [selected, setSelected] = useState(null)

  //fetch
  // const getCatImages = () => {
  //     return fetch("https://api.thecatapi.com/v1/images/search")
  //     .then((response) => response.json())
  //     .then((json) => {
  //         return json.url
  //     })
  //     .catch((error) => {
  //         console.log(error)
  //     })
  // }

  const getCatImagesByBreed = async ({ amount }: any) => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/breeds?limit=${amount}&page=0`,
        {
          headers: {
            "x-api-key": "68742e96-887f-4f9f-a489-ba3735d55609",
          },
        }
      );
      const json = await response.json();
      setImages(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCatImagesByBreed({ amount: 20 });
    // console.log(images);
  }, []);

  const setFaves = ({item}: any) => {
    setState(!state);
    setSelected(item);
    console.log(selected)
  };

  const renderImagesRow: ListRenderItem<Cat> = ({ item }) => {
      return (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: item.image.url }} />
      <Text style={styles.name}>{item.name}</Text>
      {selected !== null && (
        <TouchableOpacity
        style={{ flex: 1, alignItems: "flex-end" }}
        onPress={() => setFaves(item)}
      >
        <FontAwesome name={"heart"} color={state ? "red" : "gold"} size={18} />
      </TouchableOpacity>
      ) }
      
    </View>
  )};

  if (loading) {
    return (
      <View style={{ flex: 1, padding: 24 }}>
        <ActivityIndicator size={"large"} color={"maroon"} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>All Cats</Text>
      </View>

      {/* list */}
      {/* <>
        <View style={styles.item}>
          <Image style={styles.image} source={{ uri: images as any }} />
          <Text style={styles.name}>Abyssinian</Text>
        </View>
      </> */}
      <FlatList
        data={images}
        showsVerticalScrollIndicator={false}
        bounces={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderImagesRow}
      />
    </View>
  );
};

export default HomeScreen;
