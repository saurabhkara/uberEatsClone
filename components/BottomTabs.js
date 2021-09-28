import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTabs() {
    return (
        <View  style={{
               
                height:50,
                alignItems:'center',
                flexDirection:'row',
                backgroundColor:'#eee',
                width:'100%',
                paddingHorizontal:12,
                
                }}>
            <Icon name='home' text='Home'/>
            <Icon name='search' text='Search'/>
            <Icon name='shopping-bag' text='Grocery'/>
            <Icon name='receipt' text='order'/>
            <Icon name='user' text='Account'/>
            
        </View >
    )
}

const Icon=(props)=>(
    <TouchableOpacity style={{marginHorizontal:15, marginTop:5,alignItems:'center'}}>
    <FontAwesome5 
        name={props.name}
        size={25}
        style={{
        }}
    />
    <Text>{props.text}</Text>
    </TouchableOpacity>
)