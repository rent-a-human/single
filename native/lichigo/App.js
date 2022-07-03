import React from "react";
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton } from "@react-native-material/core";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Pin from "./components/Pin";
import User from "./components/User";

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome} />
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