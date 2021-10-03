import React, { useState} from 'react'
import { View, Text,TouchableOpacity ,Modal, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import firebase from '../../firebase';
import LottieView from 'lottie-react-native';


export default function ViewCart(props) {

    const[modalVisiable,setModalVisiable]=useState(false);
    const[loading, setLoading]=useState(false)

    const {routes, navigation}=props;
    const {items, restaurantName}=useSelector((state)=>state.cartReducer.selectedItems);
    const total=items
        .map((item)=>Number(item.price.replace('$','')))
        .reduce((prev,cur)=>prev+cur,0);

    const totalUSD=total.toLocaleString('en',{
        style:'currency',
        currency:'USD',
    })

    // console.log(totalUSD,' total');

    const addOrderToFirebase=()=>{
        setLoading(true);
        const db=firebase.firestore();
        db.collection("orders").add({
            items:items,
            restaurantName:restaurantName,
            createdAt:firebase.firestore.FieldValue.serverTimestamp()
        }).then(()=>
        setTimeout(()=>{
            setLoading(false);
            
            props.navigation.navigate('OrderCompleted')
        },1500))

    }


    const checkoutModalContent=()=>{
        return(
            <>
                <View style={styles.modelContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index)=>(
                            <OrderItem key={index} item={item}/>
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal </Text>
                            <Text style={styles.subtotalText}>$ {totalUSD} </Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
                            <TouchableOpacity style={{
                                elevation:1,
                                backgroundColor:'black',
                                alignItems:'center',
                                padding:10,
                                borderRadius:30,
                                width:250,
                                position:'relative'
                                }}
                                onPress={()=>{addOrderToFirebase();setModalVisiable(false);}}
                                >
                                <Text style={{fontSize:16, color:'white'}}>Check Out</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </View>
            </> 
        )
    }

    return <>
        <Modal animationType='slide' visible={modalVisiable}
            transparent={true} onRequestClose={()=>{setModalVisiable(false)}}
        >
            {checkoutModalContent()}
        </Modal>
        {total ?
            <View style={{
                flex: 1, alignItems: 'center', alignSelf: 'center', flexDirection: 'row',
                position: 'absolute', bottom: 2, zIndex: 999
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }} >
                    <TouchableOpacity style={{
                        backgroundColor: 'black',justifyContent:'center',
                        padding: 13, width: 300, alignContent:'center',
                        borderRadius: 40, position: 'relative', flexDirection:'row' }}
                        onPress={()=>(setModalVisiable(true))}
                        >
                        <Text style={{ fontSize: 20, color: 'white',}}>View Cart</Text>
                        <Text style={{ fontSize: 20, color: 'white',}}>{`    $${totalUSD}`}</Text>
                    </TouchableOpacity>
                </View>
            </View>
         : null
        }
        { loading? 
            <View style={{backgroundColor:'black', position:'absolute',
                opacity:0.6,justifyContent:'center', alignItems:'center',width:'100%', height:'100%'}}
            >
            <LottieView style={{height:250,justifyContent:'center',alignItems:'center'}} source={require('../../assets/animations/scanner.json')} autoPlay speed={3} />
            </View>
        :null}
        </>
    
}

const styles=StyleSheet.create({
    modelContainer:{
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:'rgba(0,0,0,0.7)'
    },
    modalCheckoutContainer:{
        backgroundColor:'white',
        padding:16,
        height:500,
        borderWidth:1,
    },
    restaurantName:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
        marginBottom:10,
    }, 
    subtotalContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15,
    }, 
    subtotalText:{
        textAlign:'left',
        fontWeight:'bold',
        fontSize:15,

    }
})