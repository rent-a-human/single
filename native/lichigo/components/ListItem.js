import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Icon } from '@rneui/themed';

const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <View style={styles.listItemView}>
                <Image raised source={{ uri: `https://randomuser.me/api/portraits/women/${item.id}.jpg` }} style={styles.product} />
                <Text style={styles.listItemText}>{item.text} 1</Text>
                </View>
                {/* <Icon raised
                    name='done'
                    color='#517fb5'
                    onPress={() => deleteItem(item.id)}
                /> */}
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    listItem: {
        padding: 8,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 16,
        paddingLeft: 8
    },
    product: {
        height: 60,
        width: 60,
        borderRadius: 100 / 2
    }
});

export default ListItem;