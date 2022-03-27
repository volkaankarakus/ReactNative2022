import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemList = ({text}) => {
  return (
    <View style={style.card}>
      <Text>
          {text}
      </Text>
    </View>
  )
}

export default ItemList

const style = StyleSheet.create({
    card:{padding:10,backgroundColor:'#ddd',margin:2}
})