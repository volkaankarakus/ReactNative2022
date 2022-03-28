import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


const NavigateToFirstScreen = props => {
    props.navigation.navigate('FirstScreen');
}

const NavigateToThirdScreen = props => {
  props.navigation.navigate('ThirdScreen');
}


const SecondScreen = props => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title='GO TO FIRST PAGE' onPress={() => NavigateToFirstScreen(props)}></Button>
        <Button title='GO TO THIRD PAGE' onPress={() => NavigateToThirdScreen(props)}></Button>
      </View>
    );
  }

  export default SecondScreen;