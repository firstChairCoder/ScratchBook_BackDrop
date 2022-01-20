import React from "react";
import { Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import type { Routes } from "../components/Navigation";

import HomeScreen from "../screens/Home";
import LikedScreen from "../screens/Liked";
// export const assets = [...homeAssets];

const RootTab = createBottomTabNavigator<Routes>();

export const RootNavigator = () => {
  return (
    <RootTab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "#000", tabBarInactiveTintColor: "rgba(33,34,39,0.2)", tabBarLabelStyle: {marginBottom: 17}, tabBarStyle: {height: 73, borderTopWidth: 0, alignItems: "center", justifyContent: "center"} }}>
      <RootTab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          title: "All cats",
          tabBarIcon: ({ color }) => <TabBarIcon name="certificate" color={color} />,
        }}
      />
      <RootTab.Screen name={"Liked"} component={LikedScreen} options={{
          title: "Cats I like",
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }} />
    </RootTab.Navigator>
  );
};

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={22} style={{ marginTop: 17 }} {...props} />;
}
