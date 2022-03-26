import { StatusBar } from 'expo-status-bar';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

import react, {Component} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import FirstState from './FirstState';

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            name : 'Volkan Karakus',
            year : '1995'
        };
    }


    changeState = () => {
        this.setState({
            name:'Ayse Fatma',
            year : 1997
        },() => { // If we want to do another operation after the operation after the comma is completed, we can define it.
            alert('Data updated.');

        });
    }


    render(){
        const {name,year} = this.state;
        return(
            <View style = {[{flex : 1,paddingTop:100}]}>
                <Text>
                    {name} {year}
                </Text>

                <TouchableOpacity onPress={this.changeState}> 
                    <Text>Degistir</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}