/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
 import auth from '@react-native-firebase/auth';
import firestore  from '@react-native-firebase/firestore';
const SignUp = function ({ navigation }) {
     const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const register = ()=>{
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.alert('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.alert('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            console.alert('That email address is invalid!');
          }
          console.error(error);
        });
    };
    const onRegisterPressed = async() => {
      console.log(username,email,password);
      try {
        const data =  firestore().collection('users').add({
            username: username,
            email: email,
            password: password,
      });
      if (data){
        register();
        return;
      }
      }
      catch (error){
        console.log(error.message);
      }


  };

    const onSignInPressed = function () {
        navigation.replace('/');
    };
    const onPrivacyPressed = function () {
        console.warn('On Privacy Pressed');
    };
    const onTermOfUsePressed = function () {
        console.warn('On Term of Use Pressed');
    };

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ffffff', '#ffffff']} style={styles.linearGradient1}>

            <SafeAreaView style={styles.root1}>
                <ScrollView>
                    <View style={styles.root}>
                        <Text style={styles.title}>Create an account</Text>
                        <View style={styles.container}>
                            <TextInput
                                value={username}
                                onChangeText={setUsername}
                                placeholder="Username"
                                placeholderTextColor={'black'}
                                style={styles.input}
                                secureTextEntry={false}
                            />
                        </View>
                        <View style={styles.container}>
                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder="Email"
                                placeholderTextColor={'black'}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.container}>
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                placeholder="Password"
                                placeholderTextColor={'black'}
                                style={styles.input}
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.container}>
                            <TextInput
                                value={passwordRepeat}
                                onChangeText={setPasswordRepeat}
                                placeholder="Retype Password"
                                placeholderTextColor={'black'}
                                style={styles.input}
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={{ width: '100%' }}>
                            <TouchableOpacity onPress={onRegisterPressed}>
                                <View >
                                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0e8c4d', '#096235']} style={styles.linearGradient}>
                                        <Text style={styles.buttonTextStyle}>Register</Text>
                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.text}>
                            By registering, you confirm that you accept our{' '}
                            <Text style={styles.Link} onPress={onTermOfUsePressed}>
                                Terms of Use
                            </Text>{' '}
                            and{' '}
                            <Text style={styles.Link} onPress={onPrivacyPressed}>
                                Privacy Policy
                            </Text>
                        </Text>


                        <CustomButton
                            text="Have an account? Sign in"
                            onPress={onSignInPressed}
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
        color: '#096235',
    },
    root1: {
        flex: 1,

    },
    container: {
        backgroundColor: '#ffffff',
        width: '100%',
        borderColor: '#404040',
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

export default SignUp;
