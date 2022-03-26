import {StyleSheet, Text, View } from 'react-native'
import React,{Component} from 'react'
import SecondScreen from './SecondScreen'
import { SafeAreaView } from 'react-native-safe-area-context';

/*
const firstScreen = () => {
  return (
    <KeyboardAvoidingView>
      <Text>firstScreen</Text>
    </KeyboardAvoidingView>
  )
}

export default firstScreen

const styles = StyleSheet.create({})

*/

export default class FirstScreen extends Component{
    render(){
        return (
        <SafeAreaView>
            <SecondScreen name= {'Volkan Karakus'} age= {26}>

            </SecondScreen>
        </SafeAreaView>
        );
    }
}