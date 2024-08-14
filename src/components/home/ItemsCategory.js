import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemsCategory = () => {
  return (
    <View style={styles.container}>
      <Text>itemsCategory</Text>
    </View>
  )
}

export default ItemsCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor:"yellow",
        borderRadius:8,
        height:100,
        width:100,
    }
})