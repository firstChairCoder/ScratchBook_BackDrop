import React from "react"
import {View, Text, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen


// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   ActivityIndicator,
//   ListRenderItem,
// } from "react-native";
// import Constants from "expo-constants";
// import { FontAwesome } from "@expo/vector-icons";

// import type { Routes, TabNavigationProps } from "../../components/Navigation";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 25,
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: "#FFF",
//   },
//   headerWrapper: {
//     height: 74,
//     justifyContent: "center",
//   },
//   header: {
//     fontFamily: "Montserrat-Bold",
//     fontSize: 16,
//   },
//   card: {
//     height: 175,
//     width: 150,
//     // flex: 1,
//     justifyContent: "flex-start",
//     marginRight: 25,
//     marginBottom: 25,
//     borderRadius: 10,
//   },
//   bigImage: {
//     maxWidth: 150,
//     minHeight: 150,
//     borderRadius: 10,
//     borderColor: "lime",
//     borderWidth: 1,
//     // resizeMode: "contain",
//   },
//   name: {
//     fontSize: 16,
//     lineHeight: 24,
//     fontWeight: "400",
//     fontFamily: "Montserrat-Regular",
//     maxWidth: "80%",
//     flexWrap: "wrap",
//   },
// });

// interface Cats {
//   id: string;
//   image: any;
//   name: string;
//   //   url: string;
//   rightIcon: any;
// }

// const LikedScreen = ({ navigation }: TabNavigationProps<Routes, "Liked">) => {
//   const [loading, setLoading] = useState(true);
//   // const [data, setData] = useState("https://cdn2.thecatapi.com/images/MTY0Mjk0Mw.jpg")
//   const [images, setImages] = useState([]);
//   const [state, setState] = useState(false);
//   const [selected, setSelected] = useState(null);
//   //   const [width, setWidth] = useState<number>(0)
//   //   const [height, setHeight] = useState<number>(0)

//   const getCatImages = async ({ amount }: any) => {
//     try {
//       const response = await fetch(
//         `https://api.thecatapi.com/v1/breeds?limit=${amount}&page=1`,
//         {
//           headers: {
//             "x-api-key": "68742e96-887f-4f9f-a489-ba3735d55609",
//           },
//         }
//       );
//       const json = await response.json();
//       setImages(json);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//       //   console.log(images)
//     }
//   };

//   useEffect(() => {
//     getCatImages({ amount: 20 });
//   }, []);

//   const setFaves = ({ item }: any) => {
//     // setState(!state);
//     setSelected(item);
//     // console.log(selected)
//   };

//   const renderImagesRow: ListRenderItem<Cats> = ({ item }) => {
//     // const IMAGE_WIDTH = Image.getSize(`${item?.image?.url}`, (width, height) => {
//     //     setWidth(width),
//     //     setHeight(height)
//     // })
//     const width = item?.image?.width;
//     const height = item?.image?.height;
//     {console.log(width, height)}
//     if (width === undefined) {
//         return (
//             <></>
//         )
//     } else {
//     return (
//       <View style={styles.card}>
//         <Image
//           style={[
//             {
//               aspectRatio: width / height === undefined ? 3 / 2 : width / height,
//             },
//             styles.bigImage,
//           ]}
//           source={{ uri: item?.image?.url }}
//           resizeMode={"contain"}
//         />

//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginTop: 5,
//           }}
//         >
//           <Text style={styles.name}>{item.name}</Text>
//           <FontAwesome name={"heart"} size={15} color={"red"} />
//         </View>
//       </View>
//     );
// }
//   };

//   if (loading) {
//     return (
//       <View style={{ flex: 1, padding: 24 }}>
//         <ActivityIndicator size={"large"} color={"maroon"} />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerWrapper}>
//         <Text style={styles.header}>Cats I Like</Text>
//       </View>

//       {/* <>
//       <View style={styles.card}>
//         <Image 
//         style={styles.bigImage}
//         source={require("../../../assets/images/icon.png")}
//         />
//         <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5 }}>
//             <Text style={styles.name}>Abyssinian</Text>
//             <FontAwesome name={"heart"} size={15} color={"red"} />
//         </View>
//       </View>
//       </> */}
//       <FlatList
//         data={images}
//         showsVerticalScrollIndicator={false}
//         bounces={false}
//         numColumns={2}
//         keyExtractor={(item, index) => item.id}
//         renderItem={renderImagesRow}
//       />
//     </View>
//   );
// };

// export default LikedScreen;
