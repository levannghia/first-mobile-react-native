/* eslint-disable */
import { useState } from "react";
import { SafeAreaView, StatusBar, View, useColorScheme } from "react-native";

export default function DemoScreen(props) {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View style={{flex: 1, backgroundColor: 'yellow'}}>

            </View>
        </SafeAreaView>
    )
}