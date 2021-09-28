import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export const localRestaurant = [
    {
        name: 'beachSide bar',
        image_url: 'https://source.unsplash.com/collection/190727/1600x900',
        categories: ['Cafe', 'Bar'],
        price: '$5',
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: 'Indian Roti',
        image_url: 'https://source.unsplash.com/user/erondu/1600x900',
        categories: ['Indian', 'Bar'],
        price: '$5',
        reviews: 1244,
        rating: 4.3,
    },
    {
        name: 'Chiense_url',
        image_url: 'https://source.unsplash.com/collection/190727/1600x900',
        categories: ['Chinese', 'Bar'],
        price: '$5',
        reviews: 1244,
        rating: 4.0,
    },

]


export default function RestaurantItem(props) {
    const {navigation}=props;
    return (
        <>
            {props. restaurantData.map((item, index) => (
            <TouchableOpacity key={index} activeOpacity={0.8}  style={{ marginTop: 15 }} 
            onPress={()=>navigation.navigate('RestaurantDetais',{
                name:item.name,
                image:item.image_url,
                price:item.price,
                reviews:item.review_count,
                rating:item.rating,
                categories:item.categories,

            })}>

                <View  style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
                    <RestaurantImage image={item.image_url}/>
                    <RestaurantInfo name={item.name} rating={item.rating} />
                </View>
                </TouchableOpacity>
            ))}
        </>

    )
}

const RestaurantImage = (props) => (
    <>
        <Image source={{
            uri: props.image
        }}

            style={{ width: '100%', height: 180 }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='white' />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
            <Text style={{ color: 'grey', fontSize: 13, }}>30-45 . mins</Text>
        </View>
        <View style={{ backgroundColor: '#eee', height: 30, width: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
            <Text >{props.rating}</Text>
        </View>

    </View>
)