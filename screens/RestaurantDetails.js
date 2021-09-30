import React from 'react'
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/RestaurantDetail/About';
import MenuItem from '../components/RestaurantDetail/MenuItem';
import ViewCart from '../components/RestaurantDetail/ViewCart';


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
            <MenuItem restaurantName={route.params.name}/>
            <ViewCart navigation={props.navigation} restaurantName={route.params.name}/>
        </View>
    )
}
