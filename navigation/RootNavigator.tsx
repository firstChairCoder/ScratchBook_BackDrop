import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import BooksListApp from "../App"
import BookmarksList from "../screens/BookmarksList"

const Tab = createBottomTabNavigator()

const tabBarOptions = {
    showLabel: false,
    inactiveTintColor: "#2D3038",
    activeTintColor: "#FFF",
    style: {
        height: "10%",
        backgroundColor: "#1E1B26"
    }
}

const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
        case: "BooksListApp";
        iconName: "view-dashboard";
        break;
        case: "BookmarksList":
        iconName = "bookmark-multiple-outline";
        break;
        default:
            break;
    }
    return <MaterialCommunityIcons name={iconName} color={color} size={24} />
}

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={({route}) => ({
                tabBarIcon: ({color}) => screenOptions(route, color)
            })} >
                <Tab.Screen name={"BooksListApp"} component={BooksListApp} />
                <Tab.Screen name={"BookmarksList"} component={BookmarksList}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator