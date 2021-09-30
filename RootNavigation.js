import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import RestaurantDetais from './screens/RestaurantDetails';
import {Provider as ReduxProvider} from 'react-redux';

import configureStore from './redux/store';

const store= configureStore()
const Stack = createStackNavigator();

export default function RootNavigation(){

    return (
      <ReduxProvider store={store} >
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RestaurantDetais" component={RestaurantDetais} />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
      );
}