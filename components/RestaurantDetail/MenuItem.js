import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';
import BouncyCheckbox from'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';


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

export default function MenuItem({restaurantName}) {
    const dispatch =useDispatch();

    const selectItem=(item,checkboxValue)=>{
        dispatch({
            type:'ADD_TO_CART',
            payload:{...item,
                restaurantName:restaurantName,
                checkboxValue:checkboxValue,
            }
        })
    }

    const cartItem=useSelector((state)=>state.cartReducer.selectedItems.items);

    const isFoodIncart=(food, cartItem)=>(
        Boolean(cartItem.find((item)=>item.title===food.title))
    )

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            { foods.map((item, index)=>(
                <View key={index} style={{
                    flexDirection: 'row', justifyContent: 'space-evenly',
                    marginHorizontal: 10, borderBottomColor:'#eee', borderBottomWidth:1, marginVertical:10,
                }}>
                    <BouncyCheckbox 
                        iconStyle={{borderColor:'gray', borderRadius:0}}
                        fillColor='green'
                        onPress={(checkboxValue)=>selectItem(item,checkboxValue)}
                        isChecked={isFoodIncart(item,cartItem)}
                    />
                    <FoodInfo title={item.title} description={item.description} price={foods[0].price} />
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
             <Text style={{fontSize:20, fontWeight:'bold'}}>{props.title}</Text>
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