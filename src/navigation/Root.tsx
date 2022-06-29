import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { DetailsScreen, FaveScreen, ListScreen } from "@screens";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const FaveStack = createStackNavigator();

const HomeTab = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={"List"} component={ListScreen} />
      <HomeStack.Screen name={"Details"} component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

const FaveTab = () => {
  return (
    <FaveStack.Navigator screenOptions={{ headerShown: false }}>
      <FaveStack.Screen name={"Favorites"} component={FaveScreen} />
      <FaveStack.Screen name={"Details"} component={DetailsScreen} />
    </FaveStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={"Home"} component={HomeTab} />
      <Tab.Screen name={"Fave"} component={FaveTab} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
