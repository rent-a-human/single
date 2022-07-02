import React from "react";
import { Button, View, Text, Image, StyleSheet } from 'react-native'

const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.apppromise}>Todo a tu alcance en</Text>
            <Image source={{ uri: 'https://i.ibb.co/61kD1m6/lichigo-logo.png' }} style={styles.logo} />

            <Text style={styles.apppromise}>Si, todo. Eso que estas pensando, tambien.</Text>
            <Button
                title="Ingresa"
                style={styles.loginButton} 
                onPress={() => navigation.navigate('Pin')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1529'
    },
    appname: {
        color: "darkslateblue",
        fontSize: 30
    },
    apppromise: {
        color: "lightblue",
        fontSize: 14,
        fontWeight: 'bold',
        padding: 20
    },
    loginButton: {
        color: "white",
        backgroundColor: "darkslateblue",
        fontSize: 23,
        fontWeight: 'bold',
        padding: 16,
        paddingRight: 42,
        paddingLeft: 42,
        borderRadius: 100 / 2,
        borderWidth: 1
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    },
    logo: {
        width: 300,
        height: 150
    }

});

export default Welcome;