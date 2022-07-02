import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator  } from 'react-native'
import { IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';

const Pin = ({ navigation }) => {
  const [pin, setPin] = useState('');

  const addNumberToPin = (num) => {
    setPin(prevItem => {
      return (prevItem + num);
    });
    if(pin.length === 3) {
      navigation.navigate('Home')
    }
  }

  const removeNumberFromPin = () => {
    setPin(prevItem => {
      return (prevItem.slice(0, -1));
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>Ingresa tu PIN de cuatro dígitos</Text>
      </View>
      <View style={styles.row}>
        {pin.length < 3 ? <>
        <Icon style={styles.iconpin} name={pin.length > 0 ? 'circle' : 'circle-thin'} color="#fff" />
        <Icon style={styles.iconpin} name={pin.length > 1 ? 'circle' : 'circle-thin'} color="#fff" />
        <Icon style={styles.iconpin} name={pin.length > 2 ? 'circle' : 'circle-thin'} color="#fff" />
        <Icon style={styles.iconpin} name={pin.length > 3 ? 'circle' : 'circle-thin'} color="#fff" />
        </>
       : <ActivityIndicator style={styles.iconpin} />}
      </View>
      <View style={styles.row}>
        <IconButton style={styles.butNumber} icon={props => <Text style={styles.number} {...props} >1</Text>} onPress={() => addNumberToPin('1')} />
        <IconButton style={styles.butNumber} icon={props => <Text style={styles.number} {...props} >2</Text>} onPress={() => addNumberToPin('2')} />
        <IconButton style={styles.butNumber} icon={props => <Text style={styles.number} {...props} >3</Text>} onPress={() => addNumberToPin('3')} />
      </View>
      <View style={styles.row}>
        <IconButton style={styles.butNumber} icon={props => <Text style={styles.number} {...props} >4</Text>} onPress={() => addNumberToPin('4')} />
        <IconButton style={styles.butNumber} icon={props => <Text style={styles.number} {...props} >5</Text>} onPress={() => addNumberToPin('5')} />
        <IconButton style={styles.butNumber} icon={props => <Text style={styles.number} {...props} >6</Text>} onPress={() => addNumberToPin('6')} />
      </View>
      <View style={styles.row}>
        <IconButton style={styles.butNumber} icon={props => <Text style={styles.number} {...props} >7</Text>} onPress={() => addNumberToPin('7')} />
        <IconButton style={styles.butNumber} icon={props => <Text style={styles.number} {...props} >8</Text>} onPress={() => addNumberToPin('8')} />
        <IconButton style={styles.butNumber} icon={props => <Text style={styles.number} {...props} >9</Text>} onPress={() => addNumberToPin('9')} />
      </View>
      <View style={styles.row}>
        <IconButton style={styles.butNumber} icon={props => <Text style={styles.number} {...props} >0</Text>} onPress={() => addNumberToPin('0')} />
        <IconButton style={styles.butNumber} icon={props => <Icon style={styles.number} name="long-arrow-left" color="#fff" {...props} />} onPress={() => removeNumberFromPin()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101629'
  },
  header: {
    fontSize: 30,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'verdana',
    width: 350,
    padding: 15
  },
  butNumber: {
    width: 70,
    height: 70,
    borderRadius: 45,
    margin: 10,
    padding: 45
  },
  number: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  iconpin: {
    fontSize: 26,
    padding: 15
  }

});

export default Pin;