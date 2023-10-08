/* eslint-disable */
import React, { useState, useEffect } from "react"
import { Image, Text, TextInput, TouchableOpacity, View, Keyboard, KeyboardAvoidingView, Platform, ScrollView, FlatList } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { fontSizes } from "../../constants"
import FoodItem from "./FoodItem"

function FoodListScreen(props) {
    const [searcText, setSearchText] = useState('')
    const [foods, setFoods] = useState([
        {
            name: 'Ga chien mam mien nam',
            image_url: 'https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg',
            status: 'Opening soon',
            price: 5455.73,
            website: 'https://google.com',
            socialNetworks: {
                facebook: 'https://facebook.com',
                twitter: 'https://praz.vn',
                instagram: 'https://google.com'
            }
        },
        {
            name: 'Com chien duong chau',
            image_url: 'https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg',
            status: 'Closing soon',
            price: 5335.73,
            website: 'https://google.com',
            socialNetworks: {
                facebook: 'https://facebook.com',
                twitter: 'https://praz.vn',
                instagram: 'https://google.com'
            }
        },
        {
            name: 'Bun cha ha noi',
            image_url: 'https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg',
            status: 'Opening soon',
            price: 5455.73,
            website: 'https://google.com',
            socialNetworks: {
                facebook: 'https://facebook.com',
                twitter: 'https://praz.vn',
                instagram: 'https://google.com'
            }
        },
        {
            name: 'Com ga xoi mo dac biet',
            image_url: 'https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg',
            status: 'Opening soon',
            price: 5455.73,
            website: 'https://google.com',
            socialNetworks: {
                facebook: 'https://facebook.com',
                twitter: 'https://praz.vn',
                google: 'https://google.com'
            }
        },
        {
            name: 'Com chay kieu dam',
            image_url: 'https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg',
            status: 'Open now',
            price: 5453.73,
            website: 'https://google.com',
            socialNetworks: {
                facebook: 'https://facebook.com',
                twitter: 'https://praz.vn',
                instagram: 'https://google.com'
            }
        },
        {
            name: 'Com chay kieu dam',
            image_url: 'https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg',
            status: 'Open now',
            price: 5453.73,
            website: 'https://google.com',
            socialNetworks: {
                facebook: 'https://facebook.com',
                twitter: 'https://praz.vn',
                instagram: 'https://google.com'
            }
        },
    ])

    const [categories, setCategories] = useState([
        {
            name: 'BBQ',
            url: 'https://cdn-icons-png.flaticon.com/512/2219/2219340.png'
        },
        {
            name: 'Coffe',
            url: 'https://cdn-icons-png.flaticon.com/512/2219/2219340.png'
        },
        {
            name: 'An sang',
            url: 'https://cdn-icons-png.flaticon.com/512/2219/2219340.png'
        },
        {
            name: 'An toi',
            url: 'https://cdn-icons-png.flaticon.com/512/2219/2219340.png'
        },
        {
            name: 'Drink',
            url: 'https://cdn-icons-png.flaticon.com/512/2219/2219340.png'
        },
        {
            name: 'Pho',
            url: 'https://cdn-icons-png.flaticon.com/512/2219/2219340.png'
        }
    ])
    const filteredFood = () => foods.filter(eachFood => eachFood.name.toLocaleLowerCase().includes(searcText.toLocaleLowerCase()))

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{flex: 1}}>
                <View style={{
                    height: 60,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Icon name='search' size={15} style={{
                        position: 'absolute',
                        left: 10,
                        top: 20,
                    }}></Icon>
                    <TextInput
                        autoCorrect={true}
                        onChangeText={(text) => {
                            setSearchText(text)
                        }}
                        style={{
                            paddingStart: 35,
                            position: 'relative',
                            height: 45,
                            backgroundColor: 'grey',
                            flex: 1,
                            opacity: 0.7,
                            borderRadius: 5,
                            color: 'white',
                            marginEnd: 5,
                        }}
                    >

                    </TextInput>
                    <Icon name='bars' size={40}></Icon>
                </View>
                <View style={{ height: 100 }}>
                    <View style={{ height: 1, backgroundColor: 'grey' }} />
                    <View style={{ flex: 1 }}>
                        <FlatList
                            horizontal={true}
                            data={categories}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={{ alignItems: 'center' }}>
                                        <Image style={{
                                            resizeMode: 'contain',
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25,
                                            margin: 10,
                                            backgroundColor: 'red'
                                        }}
                                            tintColor={'white'}
                                            source={{ uri: item.url }}
                                        >
                                        </Image>
                                        <Text style={{ color: 'black', fontSize: fontSizes.h6 }}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                    <View style={{ height: 1, backgroundColor: 'grey' }} />
                </View>
                {/* <ScrollView>
                    {foods.map((eachFood, index) => <FoodItem key={index} food={eachFood}/>)}
                </ScrollView> */}
                
                {filteredFood().length > 0 ? <FlatList
                    data={filteredFood()}
                    keyExtractor={(eachFood, index) => index}
                    renderItem={({ item }) => <FoodItem onPress={() => {
                        alert("On press " + item.name)
                    }} food={item}></FoodItem>}
                /> : <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{fontSize: fontSizes.h3, color: 'black'}}>No Food Found</Text>
                </View>}
            </View>
        </View>
    )
}

export default FoodListScreen