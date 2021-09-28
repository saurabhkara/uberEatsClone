import React from 'react'
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Ionicons} from 'react-native-vector-icons';
import {AntDesign} from 'react-native-vector-icons';

export default function SearchBar({cityHandler}) {
    return (
        <View style={{ marginTop: 15, flexDirection: 'row',marginHorizontal:2}}>
            <GooglePlacesAutocomplete placeholder='Search Here'
                query={{key:'AIzaSyD8D5Oz8Ed9p82b1cA0Uoy4531a_DtZyow'}}
                onPress={(data,details=null)=>{
                   console.log("onPress Working")
                   let city= data.description.split(",")[0];
                   cityHandler(city)
                }}
                onFail={error => console.log(error)}
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    },
                }}
                renderLeftButton={()=>(
                    <View style={{marginLeft:10}}>
                        <Ionicons name='location-sharp' size={24} />  
                    </View>
                )}  

                renderRightButton={()=>(
                    <View 
                        style={{
                            flexDirection:'row',
                            backgroundColor:'white',
                            marginHorizontal:5,
                            padding:5,
                            borderRadius:15,
                            alignItems:'center',
            

                        }}
                    >
                        <AntDesign name='clockcircle' size={11} />
                        <Text style={{paddingLeft:6}}>Search</Text>
                    </View>
                )}
            />
        </View>
    )
}
