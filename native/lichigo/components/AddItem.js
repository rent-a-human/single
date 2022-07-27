import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({ title, addItem }) => {
    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

    return (
        <View>
            <TextInput placeholder="Agrega otro..." style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Icon name="plus" size={30} color="#eee" />
                <Text style={styles.btnText}> Agregar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'orange',
        padding: 10,
        margin: 10,
        justifyContent: 'center'
    },
    btnText: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingLeft: 10
    }
});

export default AddItem;