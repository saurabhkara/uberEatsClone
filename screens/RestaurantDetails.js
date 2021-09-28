import React from 'react'
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/RestaurantDetail/About';
import MenuItem from '../components/RestaurantDetail/MenuItem';


export default function RestaurantDetais(props) {

    const{route}=props;
    // console.log(route.params);
    return (
        <View>
            
           <About route={route}/>
           <View
             style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginVertical:20
                }}
            />
            <MenuItem />
        </View>
    )
}
