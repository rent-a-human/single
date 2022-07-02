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
                
                <Text style={styles.btnText}><Icon name="home" size={30} color="#555" /> Agregar</Text>
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
        backgroundColor: 'orange',
        padding: 10,
        margin: 10
    },
    btnText: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default AddItem;