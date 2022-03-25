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
  
  // justifyContent : 'flex-start','flex-end','center','space-between','space-around' (HORIZONTAL)
    // flexWrap : justifyContentte ekrana sigmayan birseyler varsa asagiya alir.
  
  // alignItems : flex-start,flex-end,center,stretch (VERTICAL)
      // ilk ornekte flexDirection ile satir, alignItems'la satirin sonu.

  render(){
    return (
      <View style = {[{flex:1}]}>

        <View style = {{flex:2, flexDirection : 'row', alignItems:'flex-end',marginTop:50}}> 
            <View style = {[{backgroundColor:'pink',width:40,height:20}]}></View>
            <View style = {[{backgroundColor:'red',width:160,height:20}]}></View>
        </View>

        <View style = {{flex:2,flexDirection:'row',justifyContent:'space-around',marginTop:150}}>
            <View style= { [{backgroundColor:'red',width:20,height:50}]}>  
            </View>
            <View style= {[{backgroundColor:'blue',width:40,height:50}]}>  
            </View>
            <View style= { [{backgroundColor:'red',width:70,height:50}]}>  
            </View>
            <View style= {[{backgroundColor:'blue',width:30,height:50}]}>  
            </View>
            <View style= { [{backgroundColor:'red',width:50,height:50}]}>  
            </View>
            <View style= {[{backgroundColor:'blue',width:50,height:50}]}>  
            </View>
        </View>

        <View style = {{flex:2,flexDirection:'row',marginTop:50,flexWrap:'wrap'}}>
            <View style= { [{backgroundColor:'red',width:120,height:50}]}>  
            </View>
            <View style= {[{backgroundColor:'blue',width:40,height:50}]}>  
            </View>
            <View style= { [{backgroundColor:'red',width:70,height:50}]}>  
            </View>
            <View style= {[{backgroundColor:'blue',width:130,height:50}]}>  
            </View>
            <View style= { [{backgroundColor:'red',width:10,height:50}]}>  
            </View>
            <View style= {[{backgroundColor:'blue',width:50,height:50}]}>  
            </View>
        </View>

        <View style = {{flex:2,flexDirection:'row'}}>
          <View style= { [style.welcomeArea,{backgroundColor:'blue',marginTop:150}]}>  
          </View>
          <View style= { [style.welcomeArea,{backgroundColor:'red'}]}>  
          </View>
          <View style= { [style.welcomeArea,{backgroundColor:'green'}]}>  
          </View>
        </View>

        <View style = {{flex:4,flexDirection:'row'}}>
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