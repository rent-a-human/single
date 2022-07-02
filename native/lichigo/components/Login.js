import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'

const Login = () => {
  return (
    <View style={styles.container}>
       <Image source={{uri: 'https://i.ibb.co/Kx7yhYZ/Screen-Shot-2022-06-24-at-9-35-22-PM.png'}} style={styles.pin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  pin: {
    width: 300,
    height: 150
  }
});

export default Login;