import { View, Text } from 'react-native' // created with rnf
import React from 'react'
import { useRoute } from '@react-navigation/native';


export default function Profile() { // deleting ({route,navigation}) thanks to useRoute() 

    //console.log(route);
    //console.log(navigation);
    //console.log(route.params);

    const route = useRoute();

    const {userName,userEmail,userPassword} = route.params;

  return (
    <View style= {{flex:1,justifyContent:'center',alignItems:'center'}}>
      <View>
          <Text>Name : {userName}</Text>
          <Text>Email : {userEmail}</Text>
          <Text>Password : {userPassword}</Text>
      </View>
    </View>
  )
}