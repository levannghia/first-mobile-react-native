/* eslint-disable */
import React from 'react';
import { Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {fontSizes} from '../constants'

function UiButton(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                borderWidth: 1,
                height: 45,
                borderRadius: 5,
                borderColor: 'white',
                marginHorizontal: 20,
                marginVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: props.isSelected == true ? 'white' : null
            }}
        >
            {props.isSelected == true && <Icon name={"check-circle"} size={fontSizes.h2} style={{
                color: 'green',
                position: 'absolute',
                left: 10,
                top: 10,
            }}></Icon>}
            <Text style={{ color: props.isSelected == true ? '#ED6263' : '#ffffff' }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default UiButton