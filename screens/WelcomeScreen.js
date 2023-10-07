/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, Text, View, TouchableOpacity } from 'react-native'
import { images, icons } from '../constants/index.js'
import { UiButton } from '../components';
import { fontSizes } from '../constants'

function WelcomeScreen() {
  const [accountTypes, SetAcountTypes] = useState([
    {
      name: 'Influencer',
      isSelected: true
    },
    {
      name: 'Business',
      isSelected: false
    },
    {
      name: 'Individua',
      isSelected: false
    },
  ])
  return (
    <View style={{
      flex: 100,
      backgroundColor: 'white',
    }}
    >
      <ImageBackground source={images.background} resizeMode='cover'
        style={{
          flex: 100,
        }}
      >
        <View style={{
          flex: 20,
        }}>
          <View style={{
            height: 50,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }}>
            <Image source={icons.fire} style={{
              marginLeft: 10,
              width: 30,
              height: 30,
              marginHorizontal: 5
            }} />
            <Text style={{
              color: 'white'
            }}>COMPANY.CO</Text>
            <View style={{ flex: 1 }} />
            <Image source={icons.question} style={{
              width: 20,
              height: 20,
              tintColor: 'white',
              marginRight: 10
            }}></Image>
          </View>
        </View>
        <View
          style={{
            flex: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: fontSizes.h5 }}>Welcome to</Text>
          <Text style={{
            marginBottom: 7,
            marginTop: 7,
            color: 'white',
            fontWeight: 'bold',
            fontSize: fontSizes.h4
          }}>YOURCOMPANY.CO !</Text>
          <Text style={{ color: 'white', fontSize: fontSizes.h5 }}>Please select your account type</Text>
        </View>
        <View
          style={{
            flex: 40
          }}
        >
          {
            accountTypes.map(account =>
              <UiButton key={account.name} onPress={() => {
                let newAccountType = accountTypes.map(eachAccount => {
                  return {
                    ...eachAccount,
                    isSelected: eachAccount.name == account.name
                  }
                })
                SetAcountTypes(newAccountType);
              }} title={account.name} isSelected={account.isSelected} />
            )
          }

        </View>
        <View
          style={{
            flex: 20
          }}
        >
          <UiButton title={"Login".toUpperCase()} />
          <Text style={{ color: 'white', fontSize: fontSizes.h5, alignSelf: 'center' }}>Want to regiter new account ?</Text>
          <TouchableOpacity onPress={() => { alert("Press Register") }} style={{ padding: 5 }}>
            <Text style={{ color: '#ED6263', fontSize: fontSizes.h5, alignSelf: 'center', textDecorationLine: 'underline' }}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default WelcomeScreen