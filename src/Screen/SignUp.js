import { Button, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SignUP = () => {
  let navigation= useNavigation()
  return (
    <ImageBackground source={require('../assests/Background_1.jpg')} // Update with your image path
      style={styles.background}>    

    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput style={styles.input} placeholder="Enter your Username here" />
      <TextInput style={styles.input} placeholder="Enter your Password here" secureTextEntry={true} />


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.text1}>Do you have an account?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("SignIn")}}>
          <Text style={styles.signUpText}>Sign In here</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>

  );
};

export default SignUP;

const styles = StyleSheet.create({
  background: {
    height: '100%',
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
  },
  container: {
    flex: 0,

    justifyContent: 'center',
    padding: 20,

  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#eab676',
  },
  input: {
    height: 50,
    borderColor: '#7A7876',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  
  button: {
    backgroundColor: '#eab676',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text1: {
    color: '#000',
    marginRight: 5,
  },
  signUpText: {
    color: '#eab676',
  },
});
