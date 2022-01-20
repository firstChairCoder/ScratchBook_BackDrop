import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { removeBookmark } from "../redux/actions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});

const BookmarksList = () => {
  const { bookmarks } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const removeFromBookmarkList = (book: any) => dispatch(removeBookmark(book));

  const handleRemoveBookmark = (book: any) => {
    removeFromBookmarkList(book);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginVertical: 12 }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          {/* Book Cover */}
          <Image
            source={{ uri: item.image_url }}
            resizeMode={"cover"}
            style={{ width: 100, height: 150, borderRadius: 10 }}
          />
          {/* Book Metadata */}
          <View style={{ flex: 1, marginLeft: 12 }}>
            {/* Book Title */}
            <View>
              <Text style={{ fontSize: 22, paddingRight: 16, color: "#FFF" }}>
                {item.title}
              </Text>
            </View>
            {/* Meta info */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                color={"#64676D"}
                name={"book-open-page-variant"}
                size={20}
              />

              <Text style={{ fontSize: 14, paddingLeft: 10, color: "#64676D" }}>
                {item.num_pages}
              </Text>
              <MaterialCommunityIcons
                color={"#64676D"}
                name={"star"}
                size={20}
                style={{ paddingLeft: 16 }}
              />
              <Text style={{ fontSize: 14, paddingLeft: 10, color: "#64676D" }}>
                {item.rating}
              </Text>
            </View>
            {/* Buttons */}
            <View style={{ marginTop: 14 }}>
              <TouchableOpacity
                onPress={() => handleRemoveBookmark(item)}
                activeOpacity={0.7}
                style={{
                  flexDirection: "row",
                  padding: 2,
                  backgroundColor: "#2D3038",
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  height: 40,
                  width: 40,
                }}
              >
                <MaterialCommunityIcons
                  color={"#64676D"}
                  size={24}
                  name={"bookmark-remove"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1E1B26" }}>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={{ color: "#FFF", fontSize: 22 }}>Bookmarks</Text>
        <View style={{ flex: 1, marginTop: 8 }}>
          {bookmarks.length === 0 ? (
            <Text style={{ color: "#64676D", fontSize: 18 }}>
              Add a book to bookmark list
            </Text>
          ) : (
            <FlatList
              data={bookmarks}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookmarksList;
