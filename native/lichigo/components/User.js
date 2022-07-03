import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';

const User = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.username}>John Lenin Ortiz Gamba</Text>
                <Text style={styles.menuTitle}>CONFIGURACION</Text>
                <TouchableOpacity style={styles.listItem}>
                    <View style={styles.listItemView}>
                        <Icon name="user-o" style={styles.listItemIcon} />
                        <Text style={styles.listItemText}>Información personal</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <View style={styles.listItemView}>
                        <Icon name="usd" style={styles.listItemIcon} />
                        <Text style={styles.listItemText}>Peso Colombiano (COP)</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <View style={styles.listItemView}>
                        <Icon name="lock" style={styles.listItemIcon} />
                        <Text style={styles.listItemText}>Seguridad</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.menuTitle}>SOBRE LICHIGO</Text>
                <TouchableOpacity style={styles.listItem}>
                    <View style={styles.listItemView}>
                        <Icon name="file-o" style={styles.listItemIcon} />
                        <Text style={styles.listItemText}>Términos y condiciones</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <View style={styles.listItemView}>
                        <Icon name="plus-square-o" style={styles.listItemIcon} />
                        <Text style={styles.listItemText}>Solicitar nueva funcionalidad</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem}>
                    <View style={styles.listItemView}>
                        <Icon name="eye" style={styles.listItemIcon} />
                        <Text style={styles.listItemText}>Reportar un error</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Pin')}>
                    <View style={styles.listItemView}>
                        <Icon name="sign-out" style={styles.listItemIcon} />
                        <Text style={styles.listItemText}>Cerrar sesión</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    username: {
        paddingLeft: 20,
        paddingTop: 40,
        paddingRight: 20,
        fontSize: 36,
        fontWeight: '400',
        fontFamily: 'Futura',
        color: '#000'
    },
    menuTitle: {
        paddingLeft: 15,
        paddingTop: 25,
        fontFamily: 'Verdana',
        letterSpacing: 1.1,
        color: '#888',
        fontSize: 14

    },
    listItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    listItemView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18,
        paddingLeft: 8
    },
    listItemIcon: {
        fontSize: 20,
        padding: 7
    }

});

export default User;