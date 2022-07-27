import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from "axios";
const FormData = global.FormData;


const baseUrl = "http://localhost:8080";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [statusText, setStatusText] = useState("Ingresa tu e-mail:");
  const [processing, setProcessing] = useState(false);

  const storeLocalUser = async (value) => {
    try {
      await AsyncStorage.setItem('@user', value)
    } catch (e) {
      // saving error
    }
  }

  const attemptLogin = async () => {
    setProcessing(true);
    try {
      console.log(email)
      const requestOptions = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      const formData = new FormData();
      formData.append("email", email);

      const response = await Axios.post(`${baseUrl}/api/user/validate`, formData, requestOptions);
      if (response.status === 201 || response.status === 200) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        navigation.navigate('Pin');
      } else {
        console.log(response)
        throw new Error("An error has occurred!!!");
      }
    } catch (error) {
      alert("An error has occurred here");
      console.log(error)
      setProcessing(false);
    }
  }

  const saveUser = (value) => {
    console.log('Save triggered', value)
    storeLocalUser(value);
    setEmail(value);
  }

  const getLocalUser = async () => {
    try {
      const value = await AsyncStorage.getItem('@user')
      if (value !== null) {
        return value;
      }
      return null;
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    const readData = async () => {
      try {
        const pUser = await getLocalUser();
        if (pUser) {
          setEmail(pUser);
        }
      } catch (error) {
        console.log(error);
      }
    };
    readData();
  }, []);

  return (
    <View style={styles.container}>
      {
        processing &&
        <ActivityIndicator size="large" style={styles.indicator} />
      }
      {
        !processing &&
        <>
          <Image source={{ uri: 'https://i.ibb.co/RN4mhqZ/single-logo.png' }} style={styles.pin} />
          {/* <Image source={{ uri: 'https://i.ibb.co/61kD1m6/lichigo-logo.png' }} style={styles.pin} /> */}
          <Text style={styles.infoText}>{statusText}</Text>
        </>
      }
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Correo Electrónico"
          placeholderTextColor="#003f5c"
          value={email}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          autoCompleteType='email'
          editable={!processing}
          onChangeText={(email) => saveUser(email)}
        />
      </View>
      <TouchableOpacity disabled={processing} style={styles.loginBtn} onPress={attemptLogin}>
        {
          processing &&
          <ActivityIndicator />
        }
        {
          !processing &&
          <Text style={styles.loginText}>Siguiente...</Text>
        }

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1529',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  indicator: {
    padding: 75
  },
  pin: {
    width: 300,
    height: 130
  },
  infoText: {
    padding: 10,
    color: "#FFF"
  },
  inputView: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 5,

    alignItems: "flex-start",
  },
  TextInput: {
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize: 18
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#02a193",
  },
  loginText: {
    color: "#FFF",
    fontWeight: 'bold'
  }
});

export default Login;