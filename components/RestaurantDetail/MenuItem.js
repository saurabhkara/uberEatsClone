import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native';
import BouncyCheckbox from'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';




export default function MenuItem({restaurantName, foods, hideCheckBox,marginLeft}) {
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
                    {hideCheckBox? null:<BouncyCheckbox 
                        iconStyle={{borderColor:'gray', borderRadius:0}}
                        fillColor='green'
                        onPress={(checkboxValue)=>selectItem(item,checkboxValue)}
                        isChecked={isFoodIncart(item,cartItem)}
                    />}
                    <FoodInfo title={item.title} description={item.description} price={foods[0].price} />
                    <FoodImage image={item.image} marginLeft={marginLeft ?marginLeft :0}/>
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
const FoodImage=({marginLeft, ...props})=>(
    <>
    <Image source={{uri:props.image}} style={{height:110, width:110, borderRadius:15, marginBottom:7,marginLeft:marginLeft}}/>
    
    </>
)