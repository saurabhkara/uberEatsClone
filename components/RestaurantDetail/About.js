import React from 'react'
import { View, Text, Image } from 'react-native';

// const yelpRestaurantInfo={
//     name:'Farmhouse Kitchen Thai Cuisine',
//     image:'https://source.unsplash.com/collection/190727/1600x900',
//     price:'$5',
//     reviews:'1500',
//     rating:5,
//     categories:[
//         {title:'Thai'},
//      {title:'Comfort Food'},
//      {title:'Coffee'}
    
//     ]
// }



// const image='https://source.unsplash.com/collection/190727/1600x900';
// const title='Farm House Kitchen Thai cuisine';
// const description='Thai * Comfort Food $$ 4*(2913)';

export default function About({route}) {
    // console.log(route.params)
    const{name, image, price,reviews,rating, categories}=route.params;
    const formatCategories =categories.map((cat)=>cat.title).join(" • ");
    const description=`${formatCategories} ${price ? "•"+ price:' '} · 🎫 ·
${rating} ⭐  ${reviews}`;

    return (
        <View>
           <RestaurantImage  image={image}/>
           <RestaurantTitle name={ name}/>
           <RestaurantDescription description={description}/> 
        </View>
    )
}

const RestaurantImage=(props)=>(
    <Image source={{uri:props.image}} style={{height:210, width:'100%'}}/>
)

const RestaurantTitle=(props)=>(
    <Text style={{marginHorizontal:15,marginTop:10,fontSize:29, fontWeight:'bold'}}>{props.name}</Text>
)

const RestaurantDescription=(props)=>(
    <Text style={{marginHorizontal:15,marginTop:5,fontWeight:'400'}}>{props.description}</Text>
)