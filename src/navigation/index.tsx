import React from "react";
import { Platform, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import LikedScreen from "../screens/Liked";
import Kitty from "../../assets/svg/Kitty";
import Heart from "../../assets/svg/Heart";

const defaultConfig = {
  tabBarActiveTintColor: "#212227",
  tabBarInactiveTintColor: "rgba(33,34,39,0.2)",
  headerShown: false,
  tabBarLabelStyle: {
    marginBottom: Platform.OS === "ios" ? 0 : 10
  },
  tabBarStyle: {
    backgroundColor: "rgba(255,255,255, 0.92)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 1.5,
    elevation: 0,
    height: Platform.OS === "ios" ? 80 : 60
  }
};

const RootTab = createBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <RootTab.Navigator screenOptions={defaultConfig}>
      <RootTab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          title: "All cats",
          tabBarIcon: ({ color }) => (
            <View style={{ marginTop: 10 }}>
              <Kitty color={color} />
            </View>
          )
        }}
      />
      <RootTab.Screen
        name={"Liked"}
        component={LikedScreen}
        options={{
          title: "Cats I like",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ marginTop: 10 }}>
              <Heart
                color={color}
                width={26}
                height={22}
                stroke={focused ? "#212227" : "rgba(33, 34, 39, 0.2)"}
              />
            </View>
          )
        }}
      />
    </RootTab.Navigator>
  );
};
