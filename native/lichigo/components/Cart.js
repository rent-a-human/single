import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, Image, StyleSheet, FlatList } from 'react-native'
import Axios from "axios";
import ListItem from './ListItem'
import AddItem from "./AddItem";

const Cart = ({ navigation }) => {
    const [items, setItems] = useState([
        { id: 1, body: "", title: 'Leche Entera' },
        { id: 2, body: "", title: 'Huevos AAA x 30' },
        { id: 3, body: "", title: 'Pan Tajado' },
        { id: 4, body: "", title: 'Jugo de Naranja' },
    ])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios({
                    url: "https://jsonplaceholder.typicode.com/posts",
                });
                setItems(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [setItems]);

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id !== id)
        });
    }

    const addItem = (title) => {
        setItems(prevItems => {
            return [{ id: prevItems.length + 1, title, body: "" }, ...prevItems];
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