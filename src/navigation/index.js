import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import LikedScreen from "../screens/Liked";
import Kitty from "../../assets/svg/Kitty";
import Heart from "../../assets/svg/Heart";

const RootTab = createBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <RootTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#212227",
        tabBarInactiveTintColor: "rgba(33,34,39,0.2)",
        tabBarLabelStyle: { marginBottom: 17, color: "#000" },
        tabBarStyle: {
          height: 73,
          borderTopWidth: 0,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <RootTab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          title: "All cats",
          tabBarIcon: ({ focused }) => (
            <View style={{ marginTop: 17 }}>
              <Kitty color={focused ? "#212227" : "rgba(33, 34, 39, 0.2)"} />
            </View>
          ),
        }}
      />
      <RootTab.Screen
        name={"Liked"}
        component={LikedScreen}
        options={{
          title: "Cats I like",
          tabBarIcon: ({ focused }) => (
            <View style={{ marginTop: 17 }}>
              <Heart
                color={focused ? "#212227" : "rgba(33, 34, 39, 0.2)"}
                width={26}
                height={22}
                stroke={focused ? "#212227" : "rgba(33, 34, 39, 0.2)"}
              />
            </View>
          ),
        }}
      />
    </RootTab.Navigator>
  );
};
