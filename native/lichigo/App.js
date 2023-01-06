import React from "react";
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Pin from "./components/Pin";
import User from "./components/User";
import Login from "./components/Login";

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Pin" options={{ headerShown: false }} component={Pin} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen
          name="User"
          component={User}
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Text {...props} >Tu cuenta</Text>,

          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backBtn: {
    fontSize: 18
  }
});

export default App;