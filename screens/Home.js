import React, { useState, useEffect} from 'react'
import { View, Text, SafeAreaView,StyleSheet, StatusBar, ScrollView} from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem from '../components/RestaurantItem';
import { localRestaurant } from '../components/RestaurantItem';
import BottomTabs from '../components/BottomTabs';
import { Divider } from 'react-native-elements/dist/divider/Divider';


const YELP_API_KEY = 
'r0ZImxbQ4tgHoEgeBBNcMnbyU-rCmmDVa72uR9BBwYr58f3KdjnLjkxjql5aAfx8nfTHZ_y_FAO0Mv3M1L8yob8Nfkg_SRP8Z0HDUa2aqw-nhoVXcm49-ao5hi5MYXYx';

export default function Home({navigation}) {

    const[restaurantData, setRestaurantData]=useState(localRestaurant);
    const[city, setCity]=useState('hollywood');
    const[activeTab, setActiveTab]=useState('Delivery');
    
    const getRestaurantsFromYelp=()=>{
        const yelpURL=`https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
    
        const apiOptions={
            headers:{
                authorization:`Bearer ${YELP_API_KEY}`
            },
        }
        return fetch(yelpURL,apiOptions)
        .then(res=>res.json())
        .then(json=>{
                let tab=activeTab.toLowerCase();
                setRestaurantData(json.businesses.filter((item)=>item.transactions.includes(tab)))
                
                // console.log(json.businesses.filter((item)=>item.transactions.includes(tab)))
                console.log("working")
                //filering the data based on delivery or pickup
                //filter((business)=> business.transactions.includes(activeTab.toLowerCase()))
            // console.log(json.businesses)
            // console.log(json.businesses.filter((business)=>
            // business.transactions.includes(activeTab.toLowerCase())))

        })
        
    }

    useEffect(()=>{
        getRestaurantsFromYelp()
    },[city,activeTab])

    return (
     
        <View style={styles.container}>

            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View style={{ padding: 15, backgroundColor: '#fff' }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar  cityHandler={setCity}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} navigation={navigation}/>
                   
            </ScrollView>
            <Divider width={1} style={{ backgroundColor: 'blue' }}/>
            <BottomTabs /> 
        </View>

    )
}

const styles= StyleSheet.create({
    container:{
        // marginHorizontal:10,
        backgroundColor:'#eee',
        flex:-1,
    }
})