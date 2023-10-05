/* eslint-disable */
import React, { useState, useEffect } from "react"
import { Image, Text, TextInput, TouchableOpacity, View, Keyboard, KeyboardAvoidingView, Platform } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { fontSizes } from "../constants"

function LoginScreen(props) {
    const [keyboardIsShow, setkeyboardIsShow] = useState(false)
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardIsShow(true)
        })

        Keyboard.addListener("keyboardDidHide", () => {
            setkeyboardIsShow(false)
        })
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={{
                flex: 100,
                backgroundColor: 'white',
            }}>
            <View
                style={{
                    flex: 35,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: 'space-around',
                }}
            >
                <Text
                    style={{
                        color: 'black',
                        fontSize: fontSizes.h1,
                        fontWeight: 'bold',
                        width: '50%',
                    }}
                >Already have an account ?</Text>
                <Image source={require('../assets/images/login.png')}
                    style={{
                        width: 120,
                        height: 120,
                    }}
                ></Image>
            </View>
            <View style={{ flex: 25 }}>
                <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
                    <Text style={{ color: '#ED6263', fontSize: fontSizes.h5 }}>Email:</Text>
                    <TextInput style={{ color: 'black', borderBottomColor: '#ED6263', borderBottomWidth: 1, height: 35 }} placeholder="example@gmail.com" placeholderTextColor={"rgba(0, 0, 0, 0.6)"}></TextInput>
                </View>
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={{ color: '#ED6263', fontSize: fontSizes.h5 }}>Password:</Text>
                    <TextInput style={{ color: 'black', borderBottomColor: '#ED6263', borderBottomWidth: 1, height: 35 }} secureTextEntry={true} placeholder="Enter your password" placeholderTextColor={"rgba(0, 0, 0, 0.6)"}></TextInput>
                </View>
            </View>
            {keyboardIsShow === false && <View style={{ flex: 15 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#ED6263',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '60%',
                        alignSelf: 'center',
                        borderRadius: 20
                    }}
                >
                    <Text style={{ color: 'white', padding: 10, fontSize: fontSizes.h5 }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 5 }}>
                    <Text style={{
                        color: '#ED6263',
                        alignSelf: 'center',
                        padding: 8,
                        fontSize: fontSizes.h6,
                    }}>New user? Register now</Text>
                </TouchableOpacity>
            </View>}
            <View style={{ flex: 25 }}>
                <View style={{ flexDirection: 'row', height: 40, alignItems: 'center', marginHorizontal: 20 }}>
                    <View style={{ backgroundColor: 'black', height: 1, flex: 1 }} />
                    <Text style={{
                        color: 'black',
                        alignSelf: 'center',
                        padding: 8,
                        fontSize: fontSizes.h6,
                        marginHorizontal: 5
                    }}>User other method ?</Text>
                    <View style={{ backgroundColor: 'black', height: 1, flex: 1 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Icon name='facebook' size={35} color={'rgb(27, 117, 214)'}></Icon>
                    <View style={{ width: 15 }}></View>
                    <Icon name='google' size={35} color={'rgb(211, 80, 54)'}></Icon>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen