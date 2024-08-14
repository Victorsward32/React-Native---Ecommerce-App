import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from '../Screen/MainScreen';
import SignIn from '../Screen/SignIn';
import AntDesign from 'react-native-vector-icons/dist/AntDesign'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import UserAccount from '../Screen/UserAccount';
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import CollectionShoes from '../Screen/CollectionShoes';

const Tab=createBottomTabNavigator();
const bottom_navigation = () => {
    const screenOptions =()=>({
        tabBarStyle:[
            {
                display: 'flex',
            paddingTop: 9,
            paddingBottom: 0,
            height: 58,
            paddingHorizontal: 5,
            backgroundColor: '#fff'
            },
            null,
        ],
        tabBarShowLabel: true,
        tabBarInactiveTintColor: '#434345',
        tabBarActiveTintColor: '#625EAA'

    });
  return (
    <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name="Home" 
                component={MainScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name='home' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Collection" 
                component={CollectionShoes} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name='bag-handle-outline' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Account" 
                component={UserAccount} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <AntDesign name='user' size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
  )
}

export default bottom_navigation

const styles = StyleSheet.create({

})