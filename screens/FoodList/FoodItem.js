/* eslint-disable */
import { Image, Text, TouchableOpacity, View } from "react-native"
import { fontSizes } from "../../constants"
import Icon from 'react-native-vector-icons/FontAwesome5'

function _getColorStatus(status){
    if(status.toLowerCase().trim() == 'opening soon'){
        return 'green'
    }else if(status.toLowerCase().trim() == 'closing soon'){
        return 'red'
    }else if(status.toLowerCase().trim() == 'open now'){
        return 'black'
    }

    return 'green'
}

export default function FoodItem(props) {
    const food = props.food;
 
    return (
        <TouchableOpacity onPress={props.onPress} style={{
            height: 150,
            paddingStart: 10,
            paddingTop: 15,
            flexDirection: 'row',
            }}>
            <Image 
            style={{
                borderRadius: 15,
                height: 120,
                width: 120,
                resizeMode: 'contain',
            }}
            source={{uri: food.image_url}}
            />
            <View style={{
                marginRight: 10,
                marginLeft: 15,
                flex: 1
            }}>
                <Text style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: fontSizes.h5
                }}>{food.name}</Text>
                <View style={{backgroundColor: 'black', height: 1}}/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{ fontSize: fontSizes.h5}}>Status: </Text>
                    <Text style={{color: _getColorStatus(food.status), fontSize: fontSizes.h5}}>{food.status.toUpperCase()}</Text>
                </View>
                <Text style={{ fontSize: fontSizes.h5}}>Price: {food.price}$</Text>
                <Text style={{ fontSize: fontSizes.h5}}>Food type: Humberger</Text>
                <Text style={{ fontSize: fontSizes.h5}}>Website: {food.website}</Text>
                <View style={{flexDirection: 'row'}}>
                    {food.socialNetworks['facebook'] != undefined && <Icon name='facebook' size={20} style={{paddingEnd: 5}}></Icon>}
                    {food.socialNetworks['google'] != undefined && <Icon name='google' size={20} style={{paddingEnd: 5}}></Icon>}
                    {food.socialNetworks['twitter'] != undefined &&<Icon name='twitter' size={20} style={{paddingEnd: 5}}></Icon>}
                </View>
            </View>
        </TouchableOpacity>
    )
}