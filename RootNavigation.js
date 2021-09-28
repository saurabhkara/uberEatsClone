import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import RestaurantDetais from './screens/RestaurantDetails';


const Stack = createStackNavigator();

export default function RootNavigation(){

    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RestaurantDetais" component={RestaurantDetais} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}