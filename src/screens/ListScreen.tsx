/* eslint-disable max-len */
import React from "react";
import { useTheme } from "@react-navigation/native";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet
} from "react-native";
import { Box, Text } from "react-native-design-utility";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons as Icon, Entypo as Icon2 } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useState } from "react";
import { useEffect } from "react";

import breedsApi from "../api/breeds";

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,

    shadowRadius: 3.84
  },
  avatar: {
    borderRadius: 20,
    height: 40,
    width: 40
  },
  placeImg: {
    borderRadius: 16,
    height: 150,
    width: 150
  }
});

export const ListScreen = ({ navigation }: any) => {
  const theme = useTheme();
  const { colors } = theme;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    setLoading(true);
    const resp = await breedsApi.getBreeds();
    setLoading(false);

    setError(!resp.ok);
    setData(resp.data);

    return resp;
  };

  // console.log(data);

  const renderItem = ({ item }: any) => {
    return (
      <Pressable onPress={() => navigation.navigate("Details")}>
        <Box
          dir="row"
          w="100%"
          bg="greyLightest"
          my="sm"
          radius={16}
          style={styles.card}
        >
          <Image source={{ uri: item.image.url }} style={styles.placeImg} />
          <Box f={1} dir="row" justify="between" py="sm" mx={8}>
            <Text>{item.name}</Text>
            <Icon2 name={"heart"} size={24} color="red" />
          </Box>
        </Box>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box f={1} px="sm" pt={Constants.statusBarHeight} bg="blueDarker">
        <Box f={1} bg="blueLightest">
          <Box dir="row" justify="between">
            <Icon name="menu-outline" color={colors.foreground} size={32} />
            <Image
              source={{
                uri: "https://images.generated.photos/cNDuHka41_J0lbI8rWRJ14yMfLIlHMYAgBwGSgq94gU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTgxMjY0LmpwZw.jpg"
              }}
              style={styles.avatar}
            />
          </Box>

          <Text font="bold" size={24} letterSpacing="tight" mt={24}>
            Search For A Pet
          </Text>

          {loading ? (
            <ActivityIndicator size="large" color="lime" />
          ) : (
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
          )}
        </Box>
      </Box>
    </SafeAreaView>
  );
};
