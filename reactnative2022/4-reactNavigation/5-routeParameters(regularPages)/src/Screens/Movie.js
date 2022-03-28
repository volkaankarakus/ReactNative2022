import { NavigationContainer } from '@react-navigation/native';
import React,{Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

 
export default class Movie extends Component {
    
    render(){
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Movie Screen</Text>
        </View>
        );
    } 
}
