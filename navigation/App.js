/* eslint-disable */
import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { WelcomeScreen, LoginScreen, RegisterScreen, FoodListScreen } from '../screens';
import UITab from "./UITab";
// import { fontSizes } from "../constants"

const Stack = createNativeStackNavigator()
export default function App(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UITab" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name={"UITab"} component={UITab}></Stack.Screen>
                {/* <Stack.Screen name={"WelcomeScreen"} component={WelcomeScreen}></Stack.Screen>
                <Stack.Screen name={"LoginScreen"} component={LoginScreen}></Stack.Screen>
                <Stack.Screen name={"RegisterScreen"} component={RegisterScreen}></Stack.Screen>
                <Stack.Screen name={"FoodListScreen"} component={FoodListScreen}></Stack.Screen> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
