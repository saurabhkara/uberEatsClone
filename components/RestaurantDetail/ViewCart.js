import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

export default function ViewCart(props) {
    const {routes, navigation}=props;
    const items=useSelector((state)=>state.cartReducer.selectedItems.items);
    const total=items
        .map((item)=>Number(item.price.replace('$','')))
        .reduce((prev,cur)=>prev+cur,0);

    const totalUSD=total.toLocaleString('en',{
        style:'currency',
        currency:'USD',
    })

    // console.log(totalUSD,' total');
    return <>
        {total ?
            <View style={{
                flex: 1, alignItems: 'center', alignSelf: 'center', flexDirection: 'row',
                position: 'absolute', bottom: 2, zIndex: 999
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }} >
                    <TouchableOpacity style={{
                        backgroundColor: 'black',justifyContent:'center',
                        padding: 13, width: 300, alignContent:'center',
                        borderRadius: 40, position: 'relative', flexDirection:'row'
                    }}>
                        <Text style={{ fontSize: 20, color: 'white',}}>View Cart</Text>
                        <Text style={{ fontSize: 20, color: 'white',}}>{`    $${totalUSD}`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
         : null
        }
        
        </>
    
}
