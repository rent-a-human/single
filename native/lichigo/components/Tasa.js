import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Tasa = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>Tasa actual</Text>
                <Text style={styles.text}>$1.00 USDC</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Para recargas</Text>
                <Text style={styles.text}>$4.188,78 COP</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Para retiros</Text>
                <Text style={styles.text}>$4.148,78 COP</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        margin: 12,
        borderRadius: 20,
        backgroundColor: '#eee'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12
    }

});

export default Tasa;