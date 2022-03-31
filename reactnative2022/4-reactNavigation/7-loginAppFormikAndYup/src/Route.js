import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens import
import Login from './Screens/Login/Login'
import Register from './Screens/Register/Register';


const Stack = createNativeStackNavigator();


export default function  App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false, headerTitleAlign:'center', headerStyle:{backgroundColor:'lightblue'}}}></Stack.Screen>
        <Stack.Screen name='Register' component={Register} options={{headerShown:false,headerTitleAlign:'center', headerStyle:{backgroundColor:'lightblue'}}}></Stack.Screen>
       </Stack.Navigator>
    </NavigationContainer>
  );
}

