import React from "react";
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Welcome from "./Welcome";
import Cart from "./Cart";
import Dashboard from "./Dashboard";

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" options={{ headerShown: false }} component={Dashboard} />
            <Tab.Screen name="Wallet" options={{ headerShown: false }} component={Welcome} />
            <Tab.Screen name="Mercado" component={Cart} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({});

export default Home;