import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native'
import React, { Component, useEffect, useState } from 'react';



export default function Register({route,navigation}) {
  
  console.log(route);
  console.log(navigation);

  //const route = useRoute();
  //const {username,password,email} = useState('');

  return (
    <View style= {{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Name : {username}</Text>
    </View>
  )
}
