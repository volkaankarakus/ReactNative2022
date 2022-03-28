import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


const NavigateToSecondPage = props => {
    props.navigation.navigate('SecondScreen');
}

// Home Component
const FirstScreen = props => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title='GO TO SECOND PAGE' onPress={() => NavigateToSecondPage(props)}></Button>
      </View>
    );
  }

  export default FirstScreen;