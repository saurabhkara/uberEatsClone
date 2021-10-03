import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import firebase from 'firebase';
import MenuItem from '../components/RestaurantDetail/MenuItem';

export default function OrderCompleted() {
    const [lastOrder, setLastOrder]=useState({
        items:[
            
            {
                title:"Rasagulla",
                description:"Tasty and Healthy",
                price:"$11",
                image:'https://source.unsplash.com/collection/190727/1600x900',
            }
        ]
    });
    const {items, restaurantName}=useSelector((state)=>state.cartReducer.selectedItems);
    const total=items
        .map((item)=>Number(item.price.replace('$','')))
        .reduce((prev,cur)=>prev+cur,0);

    const totalUSD=total.toLocaleString('en',{
        style:'currency',
        currency:'USD',
    })

    useEffect(()=>{
        const db=firebase.firestore();
        const unsubscribe=db.collection('orders')
        .orderBy('createdBy','desc')
        .limit(1)
        .onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                setLastOrder(doc.data());
            })
        })
        return ()=>unsubscribe();
    },[])
    
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <LottieView style={{height:100, alignSelf:'center'}} 
                source={require('../assets/animations/check-mark.json')}
                autoPlay speed={0.5}
            />
            <Text style={{textAlign:'center', margin:15, fontSize:20}}>Your order at {restaurantName} has been placed for ${total}</Text>
            <ScrollView>
                <MenuItem foods={lastOrder.items} hideCheckBox={true} />
            
            
            <LottieView style={{height:200, alignSelf:'center'}} 
                source={require('../assets/animations/cooking.json')}
                autoPlay speed={0.5}
            />
            </ScrollView>
        </View>
    )
}
