import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { IconButton } from "@react-native-material/core";

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            {/* <IconButton icon={props => <Icon name="home" color="#ff0" {...props} />} /> */}
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 16,
        backgroundColor: '#fc433d',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center'
    }

});


Header.defaultProps = {
    title: 'lichigo'
}

export default Header;