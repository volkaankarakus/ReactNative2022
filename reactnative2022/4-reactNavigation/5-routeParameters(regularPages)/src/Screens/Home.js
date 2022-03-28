import { NavigationContainer, useRoute } from '@react-navigation/native';
import React,{ useState, Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const NavigateToMovie = props => {
    props.navigation.navigate('Movie'),{
      title : 'Subscribe the Channel'
    }
}


export default class Home extends Component { 

  constructor() {
    super();
  }


    render(){


        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Button title='GO TO MOVIES PAGE' onPress={() => NavigateToMovie(this.props)}></Button>
            </View>
          );
    } 
}