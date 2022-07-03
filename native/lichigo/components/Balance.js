import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton } from "@react-native-material/core";

const Balance = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={{ uri: `https://i.ibb.co/6PhYpqC/united-states.png` }} style={styles.usdc} />
                <Text style={styles.text}>USDC disponible</Text>
            </View>
            <View style={styles.balanceNumbers} >
                <Text style={styles.balanceText}>$ 3,500.00</Text>
                <Text style={styles.balancePercentage}>+5 % EA </Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.squareCardDark}>
                    <IconButton style={styles.recButton} icon={props => <Icon name="plus" style={styles.rechargeIcon} {...props} />} />
                    <Text style={styles.squareCardText}>Recarga</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.squareCardLight}>
                <IconButton style={styles.regButton} icon={props => <Icon name="exchange" style={styles.rechargeIcon} {...props} />} />
                    <Text style={styles.squareCardDarkText}>Envia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.squareCardLight}>
                <IconButton style={styles.regButton} icon={props => <Icon name="arrow-down" style={styles.rechargeIcon} {...props} />} />
                    <Text style={styles.squareCardDarkText}>Retira</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    container: {
        padding: 12
    },
    balanceNumbers: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "flex-start"
    },
    balanceText: {
        fontSize: 45,
        padding: 8,
        fontWeight: 'bold'
    },
    balancePercentage: {
        fontSize: 16
    },
    usdc: {
        height: 30,
        width: 30,
    },
    recButton: {
        backgroundColor: '#b4fa02',
        marginLeft: 14,
        marginTop: 22,
        marginBottom: 10,
        height: 40, 
        width: 40
    },
    regButton: {
        backgroundColor: '#fff',
        marginLeft: 14,
        marginTop: 22,
        marginBottom: 10,
        height: 40, 
        width: 40
    },
    rechargeIcon: {
        color: '#333',
        fontSize: 22,
        fontWeight:'100'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    squareCardDark: {
        width: 110,
        height: 110,
        borderRadius: 20,
        backgroundColor: '#101629'
    },
    squareCardLight: {
        width: 110,
        height: 110,
        borderRadius: 20,
        backgroundColor: '#eee'
    },
    squareCardText: {
        color: '#fff',
        paddingLeft: 14,
        fontSize: 16
    },
    squareCardDarkText: {
        color: '#333',
        paddingLeft: 14,
        fontSize: 16
    },
    text: {
        padding: 12,
        color: '#888',
        fontSize: 16
    }

});

export default Balance;