import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens import
import HomeScreen from './src/Screens/HomeScreen';
import Profile from './src/Screens/Profile';


const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerTitleAlign:'center', headerStyle:{backgroundColor:'lightblue'}}}></Stack.Screen>
        <Stack.Screen name='Profile' component={Profile} options={{headerTitleAlign:'center', headerStyle:{backgroundColor:'lightblue'}}}></Stack.Screen>
       </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;