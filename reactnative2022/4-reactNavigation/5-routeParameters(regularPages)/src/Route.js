import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Screens/Home';
import Movie from './Screens/Movie';


const Tab = createBottomTabNavigator();

export default class Route extends Component{
    render(){
        return (
            <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home}></Tab.Screen>
                <Tab.Screen name='Movie' component={Movie}></Tab.Screen>
            </Tab.Navigator>
            </NavigationContainer>
        );
    }
}