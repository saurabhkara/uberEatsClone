import React from 'react'
import { View, Text , StatusBar} from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/RestaurantDetail/About';
import MenuItem from '../components/RestaurantDetail/MenuItem';
import ViewCart from '../components/RestaurantDetail/ViewCart';

const foods=[
    {
        title:"Lasagna",
        description:"with butter lettuce, tomato and sauce bechamel",
        price:"$13.50",
        image:'https://source.unsplash.com/collection/190727/1600x900',
    },
    {
        title:"Rasula",
        description:"Soft white and spounse",
        price:"$10",
        image:'https://source.unsplash.com/collection/190727/1600x900',
    },
    {
        title:"Kala Jamun",
        description:"Tasty and Healthy",
        price:"$9",
        image:'https://source.unsplash.com/collection/190727/1600x900',
    },
]

 
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
            <MenuItem restaurantName={route.params.name} foods={foods}/>
            <ViewCart navigation={props.navigation} restaurantName={route.params.name}/>
        </View>
    )
}
