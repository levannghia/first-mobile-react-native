/* eslint-disable */
import React from "react";
import {LoginScreen, FoodListScreen, WelcomeScreen} from "../screens"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {fontSizes} from "../constants"
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()
const screenOptions = ({route}) => ({
    headerShown: false,
    tabBarActiveTintColor: 'tomato',
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'FoodListScreen') {
          iconName = focused
            ? 'facebook'
            : 'facebook';
        } else if (route.name === 'LoginScreen') {
          iconName = focused ? 'google' : 'google';
        } else if (route.name === 'WelcomeScreen') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color}></Icon>;
    }
})
export default function UITab(props){
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name={"FoodListScreen"} component={FoodListScreen}></Tab.Screen>
            <Tab.Screen name={"LoginScreen"} component={LoginScreen}></Tab.Screen>
            <Tab.Screen name={"WelcomeScreen"} component={WelcomeScreen}></Tab.Screen>
        </Tab.Navigator>
    )
}
