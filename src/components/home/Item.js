import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Item = () => {
    return (

        <View style={styles.container}>
            <ImageBackground source={require('../../assests/Abibas_banner1.jpg')} style={styles.itemBG}>

            </ImageBackground>

        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        // backgroundColor: 'yellow',
        borderWidth: 1,
        height: 220,
        marginRight:5,
        overflow:'hidden',
        width:355
    },
    itemBG:{
        height:'100%'
    }
})