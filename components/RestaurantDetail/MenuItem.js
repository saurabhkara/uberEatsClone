import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';


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
]

export default function MenuItem() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            { foods.map((item, index)=>(
                <View key={index} style={{
                    flexDirection: 'row', justifyContent: 'space-evenly',
                    marginHorizontal: 10, borderBottomColor:'#eee', borderBottomWidth:1, marginVertical:10,
                }}>
                    <FoodInfo title={item.name} description={item.description} price={foods[0].price} />
                    <FoodImage image={item.image} />
                    {/* <View style={{ borderBottomColor: 'black', borderBottomWidth: 1,}} /> */}
                </View>
            ))
        }
        
        </ScrollView>
    )
}

const FoodInfo=(props)=>{
    return(
        <View style={{flexDirection:'column',marginHorizontal:10, width:'60%'}}>
             <Text style={{fontSize:20, fontWeight:'bold'}}>{props.name}</Text>
            <Text >{props.description}</Text>
            <Text style={{fontSize:16}}>{props.price}</Text>
        </View>
       

    )

}
const FoodImage=(props)=>(
    <>
    <Image source={{uri:props.image}} style={{height:110, width:110, borderRadius:15, marginBottom:7}}/>
    
    </>
)