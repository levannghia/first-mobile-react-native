/* eslint-disable */
import React, { useState, useEffect } from "react"
import { Image, Text, TextInput, TouchableOpacity, View, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { isValidEmail, isValidPassword } from "../utilies/Validations"
import { fontSizes } from "../constants"

function LoginScreen(props) {
    const [keyboardIsShow, setkeyboardIsShow] = useState(false)
    //set state validate
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidation = () => {
        if (email.length > 0 && password.length > 0 && isValidEmail(email) === true && isValidPassword(password) === true) {
            return true
        }
        return false
    }
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
            <ScrollView>
                <View
                    style={{
                        flex: 30,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: 'space-around',
                    }}
                >
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 35,
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
                <View style={{ flex: 30 }}>
                    <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
                        <Text style={{ color: '#ED6263', fontSize: fontSizes.h5 }}>Email:</Text>
                        <TextInput onChangeText={(text) => {
                            setEmailError(isValidEmail(text) === true ? '' : 'Email not in correct format')
                            setEmail(text)
                        }}
                            style={{ color: 'black', borderBottomColor: '#ED6263', borderBottomWidth: 1, height: 35 }}
                            placeholder="example@gmail.com" placeholderTextColor={"rgba(0, 0, 0, 0.6)"}>
                        </TextInput>
                        <Text style={{ color: 'red', fontSize: fontSizes.h6, marginTop: 5 }}>{emailError}</Text>
                    </View>
                    <View style={{ marginHorizontal: 15 }}>
                        <Text style={{ color: '#ED6263', fontSize: fontSizes.h5 }}>Password:</Text>
                        <TextInput onChangeText={(text) => {
                            setPasswordError(isValidPassword(text) === true ? '' : 'Password chua it nha 6 ky tu')
                            setPassword(text)
                        }} style={{ color: 'black', borderBottomColor: '#ED6263', borderBottomWidth: 1, height: 35 }} secureTextEntry={true} placeholder="Enter your password" placeholderTextColor={"rgba(0, 0, 0, 0.6)"}></TextInput>
                        <Text style={{ color: 'red', fontSize: fontSizes.h6, marginTop: 5 }}>{passwordError}</Text>
                    </View>
                </View>
                {keyboardIsShow === false && <View style={{ flex: 15 }}>
                    <TouchableOpacity
                        disabled={isValidation() === false}
                        onPress={() => {
                            alert(`email: ${email}, password: ${password}`)
                        }}
                        style={{
                            backgroundColor: isValidation() === true ? '#ED6263' : 'gray',
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
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

// scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'space-between',
//   },