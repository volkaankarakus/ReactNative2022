import { StatusBar } from 'expo-status-bar';

import react, {Component} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View 
} from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default class App extends Component {

  // flexDirection : 'column','row','row-reverse','column-reverse' -> reverseler tersten siralar


  render(){
    return (
      <View style = {[{flex:1}]}>
        <View style = {{flex:2,flexDirection:'row'}}>
          <View style= { [style.welcomeArea,{backgroundColor:'blue',marginTop:150}]}>  
            <Text style= {style.welcomeText}>
              Hello World
            </Text>
          </View>
          <View style= { [style.welcomeArea,{backgroundColor:'red'}]}>  
          </View>
          <View style= { [style.welcomeArea,{backgroundColor:'green'}]}>  
          </View>
        </View>

        <View style = {{flex:3,flexDirection:'row'}}>
          <View style= { [style.welcomeArea,{backgroundColor:'pink',marginTop:150}]}>  
          </View>
          <View style= { [style.welcomeArea,{backgroundColor:'orange'}]}>  
          </View>
          <View style= { [style.welcomeArea,{backgroundColor:'blue'}]}>  
          </View>
        </View>



      </View>
    )
  }
}

const style = StyleSheet.create({
  welcomeArea : {backgroundColor : 'red',flex:1},
  welcomeText : {color : 'white',fontSize : 20}
});