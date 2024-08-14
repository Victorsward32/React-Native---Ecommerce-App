import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Item from '../components/home/Item'
import ItemsCategory from '../components/home/ItemsCategory'


const MainScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View >
          <Text style={styles.text}>Abibas</Text>
          <ScrollView horizontal={true} style={styles.ScrollView}>
            <Item />
            <Item />
            <Item />
          </ScrollView>
          <View>
            <Text style={styles.text1}>ALL EYES ON</Text>
            <Text style={styles.text2}>OUR BESTSELLER</Text>
          </View>
         
          <View style={styles.PostCard1}>
            <Image source={require('../assests/Nike_Pegasus.jpeg')} style={styles.Product_Image}></Image>
            <Text style={styles.ItemName}>Nike Pegasus 41 Electric</Text>
            <Text style={styles.category}>Men's Road Running Shoes</Text>
            <Text style={styles.Description}> Responsive cushioning in the Pegasus provides an energised ride for everyday road running. Experience lighter-weight energy return with dual Air Zoom units and a ReactX foam midsole. Plus, improved engineered mesh on the upper decreases weight and increases breathability.</Text>
            <Text style={styles.Price}>MRP : ₹ 12 495.00</Text>
          </View>
          <View style={styles.PostCard1}>
            <Image source={require('../assests/Nike_InfinityRn4.png')} style={styles.Product_Image}></Image>
            <Text style={styles.ItemName}>Nike Infinity Run </Text>
            <Text style={styles.category}>Men's Road Running Shoes</Text>
            <Text style={styles.Description}> Responsive cushioning in the Pegasus provides an energised ride for everyday road running. Experience lighter-weight energy return with dual Air Zoom units and a ReactX foam midsole. Plus, improved engineered mesh on the upper decreases weight and increases breathability.</Text>
            <Text style={styles.Price}>MRP : ₹ 12 495.00</Text>
          </View>
          <View style={styles.PostCard1}>
            <Image source={require('../assests/Nike_Air_Max.jpeg')} style={styles.Product_Image}></Image>
            <Text style={styles.ItemName}>Nike Air Max</Text>
            <Text style={styles.category}>Men's Road Running & Gym Shoes</Text>
            <Text style={styles.Description}> Responsive cushioning in the Pegasus provides an energised ride for everyday road running. Experience lighter-weight energy return with dual Air Zoom units and a ReactX foam midsole. Plus, improved engineered mesh on the upper decreases weight and increases breathability.</Text>
            <Text style={styles.Price}>MRP : ₹ 12 495.00</Text>
          </View>
          
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  text: {
    color: '#000',
    textAlign: 'left',
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  ScrollView: {
    marginHorizontal: 15,
    marginVertical: 15
  },
  text1: {
    color: '#000',
    textAlign: 'center'
  },
  text2: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  CategoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
    marginVertical: 15
  },PostCard1:{
    height:620,
    width:350,
    borderRadius:1,
    borderWidth:0.5,
    borderColor:'#B5B4B4',
    flex:1,
    flexDirection:'column',
    borderRadius:20,
    marginHorizontal:20,
    marginVertical:20,
    marginRight:20,
    
  },
  Product_Image:{
    height:350,
    width:320,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    marginBottom:10,
    borderRadius:8,
    alignSelf:'center'
    
  }
  ,ItemName:{
    color:'#000',
    fontWeight:'bold',
    fontSize:24,
    justifyContent:'flex-start',
    paddingLeft:15,
    paddingBottom:8

  },category:{
    color:"#7A7979",
    paddingLeft:15,
    paddingBottom:7,
    fontSize:16,

  },Price:{
    color:'#000',
    fontWeight:'bold',
    paddingLeft:10,
    fontSize:20,
  },Description:{
    color:'#000',
    padding:10,

  }
})