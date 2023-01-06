import React from "react";
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "./Welcome";
import Cart from "./Cart";
import Dashboard from "./Dashboard";

const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Wallet" options={{ headerShown: false }} component={Dashboard} />
            <Tab.Screen name="Dating & Mating" options={{ headerShown: false }} component={Cart} navigation={navigation} />
            <Tab.Screen name="Lichigo" component={Cart} navigation={navigation} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({});

export default Home;