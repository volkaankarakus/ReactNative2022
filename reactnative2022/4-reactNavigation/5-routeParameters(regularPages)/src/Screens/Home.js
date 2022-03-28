import { NavigationContainer } from '@react-navigation/native';
import React,{Component} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default class Home extends Component {

    render(){
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
        );
    } 
}