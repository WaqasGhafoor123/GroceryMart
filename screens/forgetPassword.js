/* eslint-disable prettier/prettier */


/* eslint-disable react-native/no-inline-styles */

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const ForgetPassword = function ({ navigation }) {
    const [Email, setEmail] = useState('');
    const onBacktoLoginPressed = function () {
        navigation.replace('/');
    };

    const onSendCodePressed = function () {
        navigation.replace('EmailConfirm');
    };


    return (

        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ffffff', '#ffffff']} style={styles.linearGradient1}>

            <SafeAreaView style={styles.root1}>
                <ScrollView>
                    <View style={styles.root}>
                        <Text style={styles.title}>Reset Password</Text>
                        <View style={styles.container}>
                            <TextInput
                                value={Email}
                                onChangeText={setEmail}
                                placeholder="Enter your email"
                                placeholderTextColor={'black'}
                                style={styles.input}
                                secureTextEntry={false}
                            />
                        </View>

                        <View style={{ width: '100%' }}>
                            <TouchableOpacity onPress={onSendCodePressed}>
                                <View >
                                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0e8c4d', '#096235']} style={styles.linearGradient}>
                                        <Text style={styles.buttonTextStyle}>Send Code</Text>
                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <CustomButton
                            text="Back to Login"
                            onPress={onBacktoLoginPressed}
                            bgColor="Transparent"
                            fgColor="#096235"
                        />
                    </View>
                </ScrollView>

            </SafeAreaView>
        </LinearGradient>

    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        marginBottom: 100,
        marginTop: 10,
        height: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#096235',
        margin: 20,
        paddingTop: 40,
    },
    text: {
        color: 'gray',
        marginVertical: 30,
    },
    Link: {
        color: '#ffffff',
    },
    root1: {
        flex: 1,

    },

    container: {
        backgroundColor: '#ffffff',
        width: '100%',
        borderColor: '#0e8c4d',
        borderWidth: 3,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        color: 'black',
    },
    linearGradient1: {
        flex: 1,
        paddingTop: '15%',
    },
    linearGradient: {
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        paddingEnd: 5,
        borderRadius: 20,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        tintColor: Colors.white,
    },
    buttonTextStyle: {
        color: '#ffffff',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

    },
});

export default ForgetPassword;
