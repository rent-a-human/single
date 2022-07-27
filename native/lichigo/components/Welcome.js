import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import Svg, { Circle } from 'react-native-svg';
import { SvgXml } from 'react-native-svg';
import SVGImg from '../assets/cash-svgrepo.svg'

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="834.01" height="545" viewBox="0 0 834.01 545"><defs><linearGradient id="a" x1="342.84" y1="283.74" x2="491.96" y2="745.53" gradientTransform="matrix(1, 0, 0, -1, 287, 848)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f2f6fb"/><stop offset="1" stop-color="#ced6ed"/></linearGradient><linearGradient id="b" x1="395.88" y1="346.36" x2="395.88" y2="200.84" gradientTransform="matrix(1, 0, 0, -1, 287, 848)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ced6ed"/><stop offset="1" stop-color="#f2f6fb" stop-opacity="0"/></linearGradient></defs><path d="M482.69,92h-.46a4.21,4.21,0,1,1,0-8.41h9a4.21,4.21,0,1,0,0-8.41H449.59a4.21,4.21,0,1,0,0,8.41h3.28a4.21,4.21,0,0,1,0,8.41H433a4.21,4.21,0,1,0,0,8.41h49.71a4.21,4.21,0,0,0,0-8.41Z" transform="translate(-265.87 -72.67)" fill="#ced6ed"/><path d="M966.6,114.19h-.67a6.09,6.09,0,0,1,0-12.17H979a6.09,6.09,0,0,0,0-12.17H918.73a6.09,6.09,0,0,0,0,12.17h4.76a6.09,6.09,0,0,1,0,12.17H894.71a6.09,6.09,0,0,0,0,12.17H966.6a6.09,6.09,0,1,0,0-12.17Z" transform="translate(-265.87 -72.67)" fill="#ced6ed"/><path d="M674.91,93.21a20.5,20.5,0,1,0,0-.08Z" transform="translate(-265.87 -72.67)" fill="#ced6ed"/><path d="M643.37,181.31a77.54,77.54,0,0,0,104.16,0c-6.84-31.7-27.59-54.7-52.06-54.7S650.21,149.62,643.37,181.31Z" transform="translate(-265.87 -72.67)" fill="#ced6ed"/><path d="M597.44,133a13,13,0,1,0,13-13h0a13,13,0,0,0-13,13Z" transform="translate(-265.87 -72.67)" fill="#ced6ed"/><path d="M577.49,188.69a49,49,0,0,0,65.88,0c-4.33-20-17.45-34.59-32.94-34.59S581.82,168.65,577.49,188.69Z" transform="translate(-265.87 -72.67)" fill="#ced6ed"/><path d="M767.48,133a13,13,0,1,0,13-13,13,13,0,0,0-13,13Z" transform="translate(-265.87 -72.67)" fill="#ced6ed"/><path d="M747.53,188.69a49,49,0,0,0,65.88,0c-4.33-20-17.45-34.59-32.93-34.59S751.86,168.65,747.53,188.69Z" transform="translate(-265.87 -72.67)" fill="#ced6ed"/><path d="M1005.77,171a54,54,0,1,0,38.56,65.85A54,54,0,0,0,1005.77,171Zm17.37,46.86L981.71,242.1a5.57,5.57,0,0,1-7.63-2L963,221.24a5.58,5.58,0,1,1,9.56-5.76s0,.08.07.13l8.23,14,36.62-21.44a5.58,5.58,0,0,1,5.64,9.63Z" transform="translate(-265.87 -72.67)" fill="#ced6ed"/><path d="M315.47,239.3l20.39,41.12a40,40,0,0,0,53.59,18.06l54.79-27.17a40,40,0,0,0,18.06-53.58L441.92,176.6a39.83,39.83,0,0,0-32.8-22l-12.53-25.23A50.92,50.92,0,1,0,305.05,174c.1.21.19.4.3.61l12.51,25.24A39.82,39.82,0,0,0,315.47,239.3Zm52.11-9.47A19.68,19.68,0,1,1,399,235l5.09,10.27a6.22,6.22,0,0,1-11,5.85,2.41,2.41,0,0,1-.15-.33L387.9,240.5A19.6,19.6,0,0,1,367.58,229.83Zm-34.05-44.11a39.76,39.76,0,0,0-8.75,6.12l-10.67-21.53a41.14,41.14,0,0,1,73.72-36.55l10.67,21.53a39,39,0,0,0-10.17,3.27Z" transform="translate(-265.87 -72.67)" fill="#ced6ed"/><path d="M449.06,507.05V211.59a30.3,30.3,0,0,1,30.3-30.29h433.3A30.3,30.3,0,0,1,943,211.59V507.07a30.29,30.29,0,0,1-30.3,30.29H479.36A30.31,30.31,0,0,1,449.06,507.05Z" transform="translate(-265.87 -72.67)" fill="#4351a2"/><path d="M474.15,201.68H917.88a12.38,12.38,0,0,1,12.38,12.38V504.6A12.38,12.38,0,0,1,917.88,517H474.15a12.38,12.38,0,0,1-12.37-12.38V214.06A12.38,12.38,0,0,1,474.15,201.68Z" transform="translate(-265.87 -72.67)" fill="url(#a)"/><path d="M592.21,259.72H799.84a26.52,26.52,0,0,1,26.53,26.53V517H565.67V286.25A26.53,26.53,0,0,1,592.21,259.72Z" transform="translate(-265.87 -72.67)" fill="#fff"/><path d="M474.36,201.68H917.71a12.53,12.53,0,0,1,12.53,12.54v18.3H461.78V214.25A12.57,12.57,0,0,1,474.36,201.68Z" transform="translate(-265.87 -72.67)" fill="#f2f6fb"/><path d="M494.61,221.67A4.57,4.57,0,1,0,490,217.1,4.58,4.58,0,0,0,494.61,221.67Z" transform="translate(-265.87 -72.67)" fill="#f06281"/><path d="M511.45,221.67a4.57,4.57,0,1,0-4.57-4.57A4.57,4.57,0,0,0,511.45,221.67Z" transform="translate(-265.87 -72.67)" fill="#fdc314"/><path d="M528.29,221.67a4.57,4.57,0,1,0-4.57-4.57A4.57,4.57,0,0,0,528.29,221.67Z" transform="translate(-265.87 -72.67)" fill="#32b88e"/><path d="M696,331.9a28.14,28.14,0,1,0-28.14-28.14A28.14,28.14,0,0,0,696,331.9Z" transform="translate(-265.87 -72.67)" fill="#a8b6dd"/><path d="M696,301.33a6.82,6.82,0,1,0-6.82-6.82A6.81,6.81,0,0,0,696,301.33Z" transform="translate(-265.87 -72.67)" fill="#fff"/><path d="M713,320.47a23.79,23.79,0,0,1-33.64.22l-.22-.22c3-8.41,9.43-14.24,16.93-14.24S710,312.06,713,320.47Z" transform="translate(-265.87 -72.67)" fill="#fff"/><path d="M607.68,350.61H784.34a10.6,10.6,0,0,1,10.6,10.6v1.08a10.59,10.59,0,0,1-10.6,10.6H607.68a10.6,10.6,0,0,1-10.6-10.6v-1.08A10.62,10.62,0,0,1,607.68,350.61Z" transform="translate(-265.87 -72.67)" fill="#e6edf7"/><path d="M607.68,384.26H784.34a10.6,10.6,0,0,1,10.6,10.6v1.08a10.59,10.59,0,0,1-10.6,10.6H607.68a10.6,10.6,0,0,1-10.6-10.6v-1.08A10.62,10.62,0,0,1,607.68,384.26Z" transform="translate(-265.87 -72.67)" fill="#e6edf7"/><path d="M620.76,421.71h69.36a6,6,0,1,1,0,11.92H620.76a6,6,0,0,1,0-11.92Z" transform="translate(-265.87 -72.67)" fill="#e6edf7"/><path d="M718.83,421.71h69.35a6,6,0,1,1,0,11.92H718.83a6,6,0,0,1,0-11.92Z" transform="translate(-265.87 -72.67)" fill="#909ad5"/><path d="M603.19,421.71a6,6,0,1,1-6,6A6,6,0,0,1,603.19,421.71Z" transform="translate(-265.87 -72.67)" fill="#e6edf7"/><path d="M671.23,455h49.58a11.13,11.13,0,1,1,0,22.26H671.23a11.13,11.13,0,1,1,0-22.26Z" transform="translate(-265.87 -72.67)" fill="#192674"/><path d="M269.64,537.33h826.48c3.9,0,5.22,4.29,1.79,5.82-65.16,29.17-383.05,151.93-829.71.15C264.4,542,265.52,537.33,269.64,537.33Z" transform="translate(-265.87 -72.67)" fill="url(#b)"/></svg>
`

const Welcome = ({ navigation }) => {
    const chooseNavigate = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            {/* <Text style={styles.apppromise}>Todo a tu alcance en</Text> */}
            <Image source={{ uri: 'https://i.ibb.co/RN4mhqZ/single-logo.png' }} style={styles.logo} />

            <Svg style={styles.svg} height="30%" width="100%" viewBox="0 0 75 40" >
                <SvgXml xml={xml} width="100%" height="100%" />
            </Svg>

            <TouchableOpacity style={styles.loginButton} onPress={() => chooseNavigate()}>
                <Text style={styles.loginText}>Ingresa</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1529'
    },
    svg: {

    },
    appname: {
        color: "darkslateblue",
        fontSize: 30
    },
    apppromise: {
        color: "lightblue",
        fontSize: 14,
        fontWeight: 'bold',
        padding: 20
    },
    loginButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        marginTop: 40,
        backgroundColor: "#02a193",
    },
    loginText: {
        color: '#fff',
        fontSize: 18
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    },
    logo: {
        width: 300,
        height: 100
    }

});

export default Welcome;