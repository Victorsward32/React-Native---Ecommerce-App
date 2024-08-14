import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import SignIn from './src/Screen/SignIn';
import SignUP from './src/Screen/SignUp';
import MainScreen from './src/Screen/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import bottom_navigation from './src/bottomNavigation/bottom_navigation';
import AddedCart from './src/Screen/AddedCart';


const Stack=createNativeStackNavigator();

const App = () => {
  return (
    // <SafeAreaView>
    //   <View>
    //   {/* <Text style={styles.Text}>Hi its my first React Native Applicaion</Text> */}
    //   <SignIn />
    //   {/* <SignUP/> */}
    //   {/* <MainScreen/> */}
    // </View>
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='bottom_navigation' screenOptions={{headerShown:false}}>
      <Stack.Screen name="bottom_navigation" component={bottom_navigation} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUP" component={SignUP} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="AddedCart" component={AddedCart} />

    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
