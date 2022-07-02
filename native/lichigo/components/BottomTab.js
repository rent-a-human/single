import React from "react";
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Welcome from "./Welcome";
import Cart from "./Cart";

const Tab =  createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={Welcome} />
            <Tab.Screen name="Dashboard" component={Cart} />
        </Tab.Navigator>
       
    )
}

const styles = StyleSheet.create({});

export default BottomTab;