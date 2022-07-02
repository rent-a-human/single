import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Welcome from "./Welcome";
import { IconButton } from "@react-native-material/core";


const Dashboard = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <IconButton icon={props => <Icon name="user-o" color="#ff0" {...props} />} />
                <IconButton icon={props => <Icon name="question" color="#ff0" {...props} />} />
            </View>
            <Welcome />
            {/* <DashHeader />
            <Balance />
            <Actions />
            <Tasa />
            <Snacks /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff'
    },
    button: {
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});

export default Dashboard;