import { StyleSheet, Text, View } from 'react-native'  // CREATING WITH rnfes
import React,{Component} from 'react'
import PropTypes from 'prop-types';


export default class SecondScreen extends Component{
    render(){
        return <View>
            <Text>
                {this.props.name} {this.props.age}
            </Text>
        </View>
    }
}

SecondScreen.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number
}

SecondScreen.defaultProps = {
    name : 'Ali Veli',
    age : 30
}