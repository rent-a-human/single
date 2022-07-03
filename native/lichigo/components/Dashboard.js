import React, { useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import Balance from "./Balance";
import Tasa from "./Tasa";
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton } from "@react-native-material/core";


const Dashboard = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <IconButton icon={props => <Image source={{ uri: `https://i.ibb.co/BGmcxzz/person.png` }} style={styles.iconImg} {...props} />} onPress={() => navigation.navigate('User')} />
                <IconButton icon={props => <Icon name="question-circle-o" style={styles.supportIcon} {...props} />} />
            </View>
            <ScrollView>
                <Balance />
                <Tasa />
            </ScrollView>
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
        paddingTop: 5,
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
    },
    iconImg: {
        width: 30,
        height: 30
    },
    supportIcon: {
        fontWeight: '100'
    }

});

export default Dashboard;