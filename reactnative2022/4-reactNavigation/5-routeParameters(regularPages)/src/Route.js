import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator,useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Screens/Home';
import Movie from './Screens/Movie';

const Tab = createMaterialBottomTabNavigator();


export default class Route extends Component{
    render(){
        return (
            <NavigationContainer>
            <Tab.Navigator initialRouteName="Home" activeColor="#f0edf6" inactiveColor="#3e2465" barStyle={{ backgroundColor: '#694fad' }}>
                <Tab.Screen name='Home' component={Home} options={{tabBarLabel: 'Home',tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26} />),}}> </Tab.Screen>
                <Tab.Screen name='Movie' component={Movie} options={{tabBarLabel: 'Movies',tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="bell" color={color} size={26} />),}}></Tab.Screen>
            </Tab.Navigator>
            </NavigationContainer>
        );
    }
}