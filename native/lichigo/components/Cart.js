import React, { useState } from "react";
import { SafeAreaView, Text, Image, StyleSheet, FlatList } from 'react-native'
import Header from "./Header";
import ListItem from './ListItem'
import AddItem from "./AddItem";
import { uuid } from "uuidv4";

const Cart = ({navigation}) => {
    const [items, setItems] = useState([
        { id: 1, text: 'Leche Entera' },
        { id: 2, text: 'Huevos AAA x 30' },
        { id: 3, text: 'Pan Tajado' },
        { id: 4, text: 'Jugo de Naranja' },
    ])

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id !== id)
        });
    }

    const addItem = (text) => {
        setItems(prevItems => {
            return [{ id: prevItems.length + 1, text }, ...prevItems];
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={items} renderItem={({ item }) =>
                <ListItem item={item}
                    deleteItem={deleteItem}
                />
            } />
            <AddItem addItem={addItem} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }

});

export default Cart;